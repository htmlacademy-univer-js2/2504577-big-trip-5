import { render, replace } from '../framework/render';
import EventCreateView from '../view/event-create/event-create-view';
import EventEditView from '../view/event-edit/event-edit-view';
import EventListView from '../view/event-list/event-list-view';
import EventView from '../view/event/event-view';
import TripSortView from '../view/trip-sort/trip-sort-view';
import EmptyRouteMsgView from '../view/empty-route-msg/empty-route-message-view';
import { TYPES_EVENT } from '../const';

export default class TripPresenter {
  eventListComponent = new EventListView();

  constructor({tripContainerElement, pointsModel}) {
    this.tripContainerElement = tripContainerElement;
    this.pointsModel = pointsModel;
    this.routePointObjects = this.pointsModel.pointObjects;
  }

  getEventCreateView() {
    const defaultType = TYPES_EVENT.FLIGHT;
    const offers = this.pointsModel.getOfferObjectsByType(defaultType);
    const destinations = this.pointsModel.destinationObjects;
    const eventCreateView = new EventCreateView({destinations: destinations, offers: offers});
    return eventCreateView;
  }

  #renderEvent(pointObject) {
    const componentNames = {eventView: 'eventView', eventEditView: 'eventEditView'};

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        switchViewAndEdit(componentNames.eventView);
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const destination = this.pointsModel.getDestinationObjectsById(pointObject.destination);
    const destinations = this.pointsModel.destinationObjects;
    const offers = this.pointsModel.getOfferObjectsByType(pointObject.type);

    const eventView = new EventView({point: pointObject, destination: destination, offers: offers, onEditClick: () => {
      switchViewAndEdit(componentNames.eventEditView);
      document.addEventListener('keydown', escKeyDownHandler);
    }});

    const eventEditView = new EventEditView({point: pointObject, destinations: destinations, offers: offers,
      onFormSubmit: () => {
        switchViewAndEdit(componentNames.eventView);
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onFormClose: () => {
        switchViewAndEdit(componentNames.eventView);
        document.removeEventListener('keydown', escKeyDownHandler);
      }});

    function switchViewAndEdit(targetComponent) {
      switch (targetComponent) {
        case componentNames.eventView:
          replace(eventView, eventEditView);
          break;
        case componentNames.eventEditView:
          replace(eventEditView, eventView);
          break;
      }
    }

    render(eventView, this.eventListComponent.element);
  }

  render() {
    render(new TripSortView(), this.tripContainerElement);
    render(this.eventListComponent, this.tripContainerElement);

    if (this.routePointObjects.length === 0) {
      render(new EmptyRouteMsgView(), this.tripContainerElement);
    }

    for (let i = 0; i < this.routePointObjects.length; i++) {
      this.#renderEvent(this.routePointObjects[i]);
    }
  }
}
