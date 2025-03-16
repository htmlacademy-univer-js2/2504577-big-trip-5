import AbstractView from '../../framework/view/abstract-view';
import { createEventTemplate } from './event-template';

export default class EventView extends AbstractView {
  constructor({point, destination, offers, onEditClick}) {
    super();
    this.point = point;
    this.destination = destination;
    this.offers = offers;
    this.handleEditClick = onEditClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createEventTemplate(this.point, this.destination, this.offers);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.handleEditClick();
  };
}
