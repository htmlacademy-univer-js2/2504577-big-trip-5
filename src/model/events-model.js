import { getEvents } from '../mock/events';
import { mockDestinations } from '../mock/events';
import { mockOffers } from '../mock/events';

export default class EventsModel {
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
}
