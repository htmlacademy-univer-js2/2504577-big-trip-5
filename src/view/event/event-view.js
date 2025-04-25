import AbstractView from '../../framework/view/abstract-view';
import { createEventTemplate } from './event-template';

export default class EventView extends AbstractView {
  constructor({event, destination, offers, onEditClick, onFavoriteClick}) {
    super();
    this.point = event;
    this.destination = destination;
    this.offers = offers;
    this.handleEditClick = onEditClick;
    this.handleFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createEventTemplate(this.point, this.destination, this.offers);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.handleEditClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.handleFavoriteClick();
  };
}
