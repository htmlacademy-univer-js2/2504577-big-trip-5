import { render } from '../render';
import EventCreateView from '../view/event-create/event-create-view';
import EventEditView from '../view/event-edit/event-edit-view';
import EventListView from '../view/event-list/event-list-view';
import EventView from '../view/event/event-view';
import TripSortView from '../view/trip-sort/trip-sort-view';

export default class TripPresenter {
  eventListComponent = new EventListView();

  constructor({tripContainerElement, pointsModel}) {
    this.tripContainerElement = tripContainerElement;
    this.pointsModel = pointsModel;
    this.routePointObjects = this.pointsModel.getPoints();
  }

  getEventCreateView() {
    const defaultType = 'flight';
    const offers = this.pointsModel.getOffersByType(defaultType);
    const destinations = this.pointsModel.getDestinations();
    const eventCreateView = new EventCreateView({destinations: destinations, offers: offers});
    return eventCreateView;
  }

  getEventEditView(pointObject) {
    const destinations = this.pointsModel.getDestinations();
    const offers = this.pointsModel.getOffersByType(pointObject.type);
    const eventEditView = new EventEditView({point: pointObject, destinations: destinations, offers: offers});
    return eventEditView;
  }

  getEventView(pointObject) {
    const destination = this.pointsModel.getDestinationById(pointObject.destination);
    const offers = this.pointsModel.getOffersByType(pointObject.type);
    const eventView = new EventView({point: pointObject, destination: destination, offers: offers});
    return eventView;
  }

  render() {
    render(new TripSortView(), this.tripContainerElement);
    render(this.eventListComponent, this.tripContainerElement);
    // render(new EventEditView(), this.eventListComponent.getElement());
    render(this.getEventEditView(this.routePointObjects[0]), this.eventListComponent.getElement());
    render(this.getEventCreateView(), this.eventListComponent.getElement());

    for (let i = 1; i < this.routePointObjects.length; i++) {
      render(this.getEventView(this.routePointObjects[i]), this.eventListComponent.getElement());
    }
  }
}
