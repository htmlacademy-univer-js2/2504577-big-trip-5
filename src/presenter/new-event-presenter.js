import { UpdateType, UserAction, closeViewKey } from '../const';
import EventEditView from '../view/event-edit/event-edit-view';
import { remove, render, RenderPosition } from '../framework/render';

export default class NewEventPresenter {
  #eventsModel = null;

  #eventListContainer = null;
  #handleDataChange = null;
  #handleDestroy = null;

  #eventEditComponent = null;

  constructor({ eventListContainer, eventsModel, onDataChange, onDestroy }) {
    this.#eventListContainer = eventListContainer;
    this.#eventsModel = eventsModel;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
  }

  init() {
    if (this.#eventEditComponent) {
      return;
    }

    this.#eventEditComponent = new EventEditView({
      destinations: this.#eventsModel.destinationObjects,
      offers: this.#eventsModel.offerObjects,
      userAction: UserAction.ADD_POINT,
      onFormSubmit: this.#handleFormSubmit,
      onFormClose: this.#handleFormClose,
      onDeleteClick: this.#handleDeleteClick,
    });

    render(
      this.#eventEditComponent,
      this.#eventListContainer,
      RenderPosition.AFTERBEGIN
    );

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (!this.#eventEditComponent) {
      return;
    }

    this.#handleDestroy();

    remove(this.#eventEditComponent);
    this.#eventEditComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  setSaving() {
    this.#eventEditComponent.updateElement({
      isDisabled: true,
      isSaving: true,
    });
  }

  setAborting() {
    const resetFormState = () => {
      this.#eventEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#eventEditComponent.shake(resetFormState);
  }

  #handleFormSubmit = (event) => {
    this.#handleDataChange(UserAction.ADD_POINT, UpdateType.MINOR, event);
  };

  #handleFormClose = () => {
    this.destroy();
    this.#handleDataChange(UserAction.CANCEL_CREATION, UpdateType.MINOR);
  };

  #handleDeleteClick = () => {
    this.destroy();
    this.#handleDataChange(UserAction.CANCEL_CREATION, UpdateType.MINOR);
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === closeViewKey) {
      evt.preventDefault();
      this.destroy();
      this.#handleDataChange(UserAction.CANCEL_CREATION, UpdateType.MINOR);
    }
  };
}
