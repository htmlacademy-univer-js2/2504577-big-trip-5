import { remove, render, replace } from '../framework/render';
import EventEditView from '../view/event-edit/event-edit-view';
import EventView from '../view/event/event-view';
import { closeViewKey, UserAction, UpdateType } from '../const';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class EventPresenter {
  #componentNames = { eventView: 'eventView', eventEditView: 'eventEditView' };
  #eventListContainer = null;
  #eventsModel = null;

  #handleModeChange = null;
  #handleDataChange = null;

  #eventView = null;
  #eventEditView = null;

  #eventObject = null;
  #mode = Mode.DEFAULT;

  constructor({ eventListContainer, eventsModel, onModeChange, onDataChange }) {
    this.#eventListContainer = eventListContainer;
    this.#eventsModel = eventsModel;
    this.#handleModeChange = onModeChange;
    this.#handleDataChange = onDataChange;
  }

  init(eventObject) {
    this.#eventObject = eventObject;
    const prevEventView = this.#eventView;
    const prevEventEditView = this.#eventEditView;

    const destination = this.#eventsModel.getDestinationObjectById(
      this.#eventObject.destination
    );
    const destinations = this.#eventsModel.destinationObjects;
    const offersByType = this.#eventsModel.getOfferObjectsByType(
      this.#eventObject.type
    );
    const offers = this.#eventsModel.offerObjects;

    this.#eventView = new EventView({
      event: this.#eventObject,
      destination: destination,
      offers: offersByType,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#eventEditView = new EventEditView({
      event: this.#eventObject,
      destinations: destinations,
      offers: offers,
      onFormSubmit: this.#handleEditFormSubmit,
      onFormClose: this.#handleEditFormClose,
      onDeleteClick: this.#handleDeleteClick,
    });

    if (!prevEventView || !prevEventEditView) {
      render(this.#eventView, this.#eventListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#eventView, prevEventView);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#eventView, prevEventEditView);
      this.#mode = Mode.DEFAULT;
    }

    remove(prevEventView);
    remove(prevEventEditView);
  }

  destroy() {
    remove(this.#eventView);
    remove(this.#eventEditView);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#switchViewAndEdit(this.#componentNames.eventView);
    }
  }

  setSaving() {
    if (this.#mode === Mode.EDITING) {
      this.#eventEditView.updateElement({
        isDisabled: true,
        isSaving: true,
      });
    }
  }

  setDeleting() {
    if (this.#mode === Mode.EDITING) {
      this.#eventEditView.updateElement({
        isDisabled: true,
        isDeleting: true,
      });
    }
  }

  setAborting() {
    if (this.#mode === Mode.DEFAULT) {
      this.#eventView.shake();
      return;
    }

    const resetFormState = () => {
      this.#eventEditView.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#eventEditView.shake(resetFormState);
  }

  #switchViewAndEdit(targetComponent) {
    switch (targetComponent) {
      case this.#componentNames.eventView:
        this.#eventEditView.reset(this.#eventObject);
        replace(this.#eventView, this.#eventEditView);
        document.removeEventListener('keydown', this.#escKeyDownHandler);
        this.#mode = Mode.DEFAULT;
        break;
      case this.#componentNames.eventEditView:
        replace(this.#eventEditView, this.#eventView);
        document.addEventListener('keydown', this.#escKeyDownHandler);
        this.#handleModeChange();
        this.#mode = Mode.EDITING;
        break;
    }
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === closeViewKey) {
      evt.preventDefault();
      this.#switchViewAndEdit(this.#componentNames.eventView);
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(UserAction.UPDATE_POINT, UpdateType.MINOR, {
      ...this.#eventObject,
      isFavorite: !this.#eventObject.isFavorite,
    });
  };

  #handleDeleteClick = (event) => {
    this.#handleDataChange(UserAction.DELETE_POINT, UpdateType.MINOR, event);
  };

  #handleEditClick = () => {
    this.#switchViewAndEdit(this.#componentNames.eventEditView);
  };

  #handleEditFormSubmit = (event) => {
    this.#handleDataChange(UserAction.UPDATE_POINT, UpdateType.MINOR, event);
  };

  #handleEditFormClose = () => {
    this.#switchViewAndEdit(this.#componentNames.eventView);
  };
}
