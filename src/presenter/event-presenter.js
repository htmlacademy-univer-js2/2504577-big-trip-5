import { remove, render, replace } from '../framework/render';
import EventEditView from '../view/event-edit/event-edit-view';
import EventView from '../view/event/event-view';
import EventCreateView from '../view/event-create/event-create-view';
import { TYPES_EVENT } from '../const';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class EventPresenter {
  #componentNames = {eventView: 'eventView', eventEditView: 'eventEditView'};
  #eventListContainer = null;
  #eventsModel = null;

  #handleModeChange = null;
  #handleDataChange = null;

  #eventView = null;
  #eventEditView = null;

  #eventObject = null;
  #mode = Mode.DEFAULT;

  constructor({eventListContainer, eventsModel, onModeChange, onDataChange}) {
    this.#eventListContainer = eventListContainer;
    this.#eventsModel = eventsModel;
    this.#handleModeChange = onModeChange;
    this.#handleDataChange = onDataChange;
  }

  init(eventObject) {
    this.#eventObject = eventObject;

    const prevEventView = this.#eventView;
    const prevEventEditView = this.#eventEditView;

    const destination = this.#eventsModel.getDestinationObjectById(this.#eventObject.destination);
    const destinations = this.#eventsModel.destinationObjects;
    const offers = this.#eventsModel.getOfferObjectsByType(this.#eventObject.type);

    this.#eventView = new EventView({
      point: this.#eventObject,
      destination: destination,
      offers: offers,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick
    });

    this.#eventEditView = new EventEditView({
      point: this.#eventObject,
      destinations: destinations,
      offers: offers,
      onFormSubmit: this.#handleEditFormSubmit,
      onFormClose: this.#handleEditFormClose
    });

    if (prevEventView === null || prevEventEditView === null) {
      render(this.#eventView, this.#eventListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#eventView, prevEventView);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#eventEditView, prevEventEditView);
    }

    remove(prevEventView);
    remove(prevEventEditView);
  }

  #getEventCreateView() {
    const defaultType = TYPES_EVENT.FLIGHT;
    const offers = this.pointsModel.getOfferObjectsByType(defaultType);
    const destinations = this.pointsModel.destinationObjects;
    const eventCreateView = new EventCreateView({destinations: destinations, offers: offers});
    return eventCreateView;
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#switchViewAndEdit(this.#componentNames.eventView);
    }
  }

  #switchViewAndEdit(targetComponent) {
    switch (targetComponent) {
      case this.#componentNames.eventView:
        replace(this.#eventView, this.#eventEditView);
        this.#mode = Mode.DEFAULT;
        break;
      case this.#componentNames.eventEditView:
        replace(this.#eventEditView, this.#eventView);
        this.#handleModeChange();
        this.#mode = Mode.EDITING;
        break;
    }
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#switchViewAndEdit(this.#componentNames.eventView);
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#eventObject, isFavorite: !this.#eventObject.isFavorite});
  };

  #handleEditClick = () => {
    this.#switchViewAndEdit(this.#componentNames.eventEditView);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleEditFormSubmit = () => {
    this.#switchViewAndEdit(this.#componentNames.eventView);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleEditFormClose = () => {
    this.#switchViewAndEdit(this.#componentNames.eventView);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };
}
