import { UpdateType } from '../const.js';
import Observable from '../framework/observable.js';

export default class EventsModel extends Observable {
  #eventsApiService = null;
  #eventObjects = [];
  #destinationObjects = [];
  #offerObjects = [];

  constructor({ eventsApiService }) {
    super();
    this.#eventsApiService = eventsApiService;
  }

  async init() {
    try {
      this.#destinationObjects = await this.#eventsApiService.destinations;
      this.#offerObjects = await this.#eventsApiService.offers;
      const events = await this.#eventsApiService.events;
      this.#eventObjects = events.map(this.#adaptToClient);
    } catch (err) {
      this.#eventObjects = [];
      this.#destinationObjects = [];
      this.#offerObjects = [];
    }
    this._notify(UpdateType.INIT);
  }

  getDestinationObjectById(id) {
    return this.#destinationObjects.find((dest) => dest.id === id);
  }

  getOfferObjectsByType(type) {
    return this.#offerObjects.find((offer) => offer.type === type);
  }

  get offerObjects() {
    return this.#offerObjects;
  }

  get destinationObjects() {
    return this.#destinationObjects;
  }

  get eventObjects() {
    return this.#eventObjects;
  }

  async updateEvent(updateType, update) {
    const index = this.#eventObjects.findIndex(
      (event) => event.id === update.id
    );

    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    try {
      const response = await this.#eventsApiService.updateEvent(update);
      const updatedEvent = this.#adaptToClient(response);
      this.#eventObjects = [
        ...this.#eventObjects.slice(0, index),
        updatedEvent,
        ...this.#eventObjects.slice(index + 1),
      ];
      this._notify(updateType, updatedEvent);
    } catch (err) {
      throw new Error('Can\'t update event');
    }
  }

  addEvent(updateType, update) {
    this.#eventObjects = [update, ...this.#eventObjects];

    this._notify(updateType, update);
  }

  deleteEvent(updateType, update) {
    const index = this.#eventObjects.findIndex(
      (event) => event.id === update.id
    );

    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    this.#eventObjects = [
      ...this.#eventObjects.slice(0, index),
      ...this.#eventObjects.slice(index + 1),
    ];

    this._notify(updateType);
  }

  #adaptToClient(event) {
    const adaptedEvent = {
      ...event,
      dateFrom:
        event['date_from'] !== null
          ? new Date(event['date_from'])
          : event['date_from'],
      dateTo:
        event['date_to'] !== null
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
