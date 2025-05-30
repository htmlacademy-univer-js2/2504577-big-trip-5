import { UpdateType } from '../const.js';
import Observable from '../framework/observable.js';

export default class EventsModel extends Observable {
  #eventsApiService = null;
  #events = [];
  #destinations = [];
  #offers = [];

  constructor({ eventsApiService }) {
    super();
    this.#eventsApiService = eventsApiService;
    this.loadErr = false;
  }

  async init() {
    try {
      this.#destinations = await this.#eventsApiService.destinations;
      this.#offers = await this.#eventsApiService.offers;
      const events = await this.#eventsApiService.events;
      this.#events = events.map(this.#adaptToClient);
    } catch (err) {
      this.loadErr = true;
    }
    this._notify(UpdateType.INIT);
  }

  getDestinationById(id) {
    return this.#destinations.find((dest) => dest.id === id);
  }

  getOffersByType(type) {
    return this.#offers.find((offer) => offer.type === type);
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }

  get events() {
    return this.#events;
  }

  async updateEvent(updateType, update) {
    const index = this.#events.findIndex(
      (event) => event.id === update.id
    );

    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    try {
      const response = await this.#eventsApiService.updateEvent(update);
      const updatedEvent = this.#adaptToClient(response);
      this.#events = [
        ...this.#events.slice(0, index),
        updatedEvent,
        ...this.#events.slice(index + 1),
      ];
      this._notify(updateType, updatedEvent);
    } catch (err) {
      throw new Error('Can\'t update event');
    }
  }

  async addEvent(updateType, update) {
    try {
      const response = await this.#eventsApiService.addEvent(update);
      const newEvent = this.#adaptToClient(response);
      this.#events = [newEvent, ...this.#events];
      this._notify(updateType, newEvent);
    } catch (err) {
      throw new Error('Can\'t add task');
    }
  }

  async deleteEvent(updateType, update) {
    const index = this.#events.findIndex(
      (event) => event.id === update.id
    );

    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    try {
      await this.#eventsApiService.deleteEvent(update);
      this.#events = [
        ...this.#events.slice(0, index),
        ...this.#events.slice(index + 1),
      ];
      this._notify(updateType);
    } catch (err) {
      throw new Error('Can\'t delete task');
    }
  }

  #adaptToClient(event) {
    const adaptedEvent = {
      ...event,
      dateFrom:
        event['date_from']
          ? new Date(event['date_from'])
          : event['date_from'],
      dateTo:
        event['date_to']
          ? new Date(event['date_to'])
          : event['date_to'],
      isFavorite: event['is_favorite'],
      basePrice: event['base_price'],
    };

    delete adaptedEvent['date_from'];
    delete adaptedEvent['date_to'];
    delete adaptedEvent['is_favorite'];
    delete adaptedEvent['base_price'];

    return adaptedEvent;
  }
}
