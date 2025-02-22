import { createElement } from '../../render';
import { createEventCreateTemplate } from './event-create-template';

export default class EventCreateView {
  getTemplate() {
    return createEventCreateTemplate();
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
