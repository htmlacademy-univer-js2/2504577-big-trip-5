import {mockPoints} from '../mock/points';
import {destinations} from '../mock/points';
import {offers} from '../mock/points';

export default class PointsModel {
  points = [...mockPoints];
  destinations = [...destinations];
  offers = [...offers];

  getDestinationById(id) {
    return destinations.find((dest) => (dest.id === id));
  }

  getOffersByType(type) {
    return offers.find((offer) => (offer.type === type));
  }

  getDestinations() {
    return this.destinations;
  }

  getPoints() {
    return this.points;
  }
}
