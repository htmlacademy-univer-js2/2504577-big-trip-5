import { nanoid } from 'nanoid';
import { UpdateType, UserAction } from '../const';
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
    if (this.#eventEditComponent !== null) {
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
    if (this.#eventEditComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#eventEditComponent);
    this.#eventEditComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleFormSubmit = (event) => {
    this.#handleDataChange(UserAction.ADD_POINT, UpdateType.MINOR, {
      id: nanoid(),
      ...event,
    });
    this.destroy();
  };

  #handleFormClose = () => {
    this.destroy();
  };

  #handleDeleteClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  };
}
