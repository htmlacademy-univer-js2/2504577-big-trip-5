import {mockPoints} from '../mock/points';
import {destinations as mockDestinations} from '../mock/points';
import {offers as mockOffers} from '../mock/points';

export default class PointsModel {
  #pointObjects = [...mockPoints];
  #destinationObjects = [...mockDestinations];
  #offerObjects = [...mockOffers];

  getDestinationObjectsById(id) {
    return this.#destinationObjects.find((dest) => (dest.id === id));
  }

  getOfferObjectsByType(type) {
    return this.#offerObjects.find((offer) => (offer.type === type));
  }

  get destinationObjects() {
    return this.#destinationObjects;
  }

  get pointObjects() {
    return this.#pointObjects;
  }
}
