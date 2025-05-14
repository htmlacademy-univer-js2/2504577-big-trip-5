import { getEvents } from "../mock/events";
import { mockDestinations } from "../mock/events";
import { mockOffers } from "../mock/events";
import { UpdateType } from "../const.js";
import Observable from "../framework/observable.js";

export default class EventsModel extends Observable {
  #eventsApiService = null;
  #eventObjects = [];
  #destinationObjects = [...mockDestinations];
  #offerObjects = [...mockOffers];

  constructor({ eventsApiService }) {
    super();
    this.#eventsApiService = eventsApiService;
  }

  async init() {
    try {
      const events = await this.#eventsApiService.events;
      this.#eventObjects = events.map(this.#adaptToClient);
    } catch(err) {
      this.#eventObjects = [];
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

  updateEvent(updateType, update) {
    const index = this.#eventObjects.findIndex(
      (event) => event.id === update.id
    );

    if (index === -1) {
      throw new Error("Can't update unexisting task");
    }

    this.#eventObjects = [
      ...this.#eventObjects.slice(0, index),
      update,
      ...this.#eventObjects.slice(index + 1),
    ];

    this._notify(updateType, update);
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
      throw new Error("Can't update unexisting task");
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
        event["date_from"] !== null
          ? new Date(event["date_from"])
          : event["date_from"],
      dateTo:
        event["date_to"] !== null
          ? new Date(event["date_to"])
          : event["date_to"],
      isFavorite: event["is_favorite"],
    };

    delete adaptedEvent['date_from'];
    delete adaptedEvent['date_to'];
    delete adaptedEvent['is_favorite'];

    return adaptedEvent;
  }
}
