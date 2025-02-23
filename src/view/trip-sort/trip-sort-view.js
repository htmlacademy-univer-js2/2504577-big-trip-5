import { createElement } from '../../render';
import { createSortTemplate } from './trip-sort-template';

export default class TripSortView {
  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this.element){
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
