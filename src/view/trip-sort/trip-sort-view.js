import AbstractView from '../../framework/view/abstract-view';
import { createSortTemplate } from './trip-sort-template';

export default class TripSortView extends AbstractView {
  #handleSortTypeChange = null;

  constructor({ onSortTypeChange, currentSortType }) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;
    this.currentSortType = currentSortType;
    this.element
      .querySelectorAll('.trip-sort__input')
      .forEach((sort) =>
        sort.addEventListener('click', this.#sortTypeChangeHandler)
      );
  }

  get template() {
    return createSortTemplate(this.currentSortType);
  }

  #sortTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
