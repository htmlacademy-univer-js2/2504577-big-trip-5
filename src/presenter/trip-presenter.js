import { render, replace } from '../framework/render';
import EventCreateView from '../view/event-create/event-create-view';
import EventEditView from '../view/event-edit/event-edit-view';
import EventListView from '../view/event-list/event-list-view';
import EventView from '../view/event/event-view';
import TripSortView from '../view/trip-sort/trip-sort-view';
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
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditToView();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const destination = this.pointsModel.getDestinationObjectsById(pointObject.destination);
    const destinations = this.pointsModel.destinationObjects;
    const offers = this.pointsModel.getOfferObjectsByType(pointObject.type);

    const eventView = new EventView({point: pointObject, destination: destination, offers: offers, onEditClick: () => {
      replaceViewToEdit();
      document.addEventListener('keydown', escKeyDownHandler);
    }});

    const eventEditView = new EventEditView({point: pointObject, destinations: destinations, offers: offers, onFormSubmit: () => {
      replaceEditToView();
      document.removeEventListener('keydown', escKeyDownHandler);
    }});

    function replaceViewToEdit() {
      replace(eventEditView, eventView);
    }

    function replaceEditToView() {
      replace(eventView, eventEditView);
    }

    render(eventView, this.eventListComponent.element);
  }

  render() {
    render(new TripSortView(), this.tripContainerElement);
    render(this.eventListComponent, this.tripContainerElement);

    for (let i = 0; i < this.routePointObjects.length; i++) {
      this.#renderEvent(this.routePointObjects[i]);
    }
  }
}
