import { getEvents } from '../mock/events';
import { mockDestinations } from '../mock/events';
import { mockOffers } from '../mock/events';
import Observable from '../framework/observable.js';

export default class EventsModel extends Observable {
  #eventObjects = getEvents();
  #destinationObjects = [...mockDestinations];
  #offerObjects = [...mockOffers];

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
      throw new Error('Can\'t update unexisting task');
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
      throw new Error('Can\'t update unexisting task');
    }

    this.#eventObjects = [
      ...this.#eventObjects.slice(0, index),
      ...this.#eventObjects.slice(index + 1),
    ];

    this._notify(updateType);
  }
}
