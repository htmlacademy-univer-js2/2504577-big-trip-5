import { createElement } from '../../render';
import { createEventCreateTemplate } from './event-create-template';

export default class EventCreateView {
  constructor({destinations, offers}) {
    this.destinations = destinations;
    this.offers = offers;
  }

  getTemplate() {
    return createEventCreateTemplate(this.destinations, this.offers);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
