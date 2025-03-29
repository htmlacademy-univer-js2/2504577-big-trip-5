import AbstractView from '../../framework/view/abstract-view';
import { createEventEditTemplate } from './event-edit-template';

export default class EventEditView extends AbstractView {
  constructor({point, destinations, offers, onFormSubmit, onFormClose}) {
    super();
    this.point = point;
    this.destinations = destinations;
    this.offers = offers;
    this.handleFormSubmit = onFormSubmit;
    this.handleFormClose = onFormClose;

    this.element.querySelector('.event--edit').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formCloseHandler);
  }

  get template() {
    return createEventEditTemplate(this.point, this.destinations, this.offers);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.handleFormSubmit();
  };

  #formCloseHandler = (evt) => {
    evt.preventDefault();
    this.handleFormClose();
  };
}
