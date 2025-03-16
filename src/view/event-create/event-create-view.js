import AbstractView from '../../framework/view/abstract-view';
import { createEventCreateTemplate } from './event-create-template';

export default class EventCreateView extends AbstractView {
  constructor({destinations, offers}) {
    super();
    this.destinations = destinations;
    this.offers = offers;
  }

  get template() {
    return createEventCreateTemplate(this.destinations, this.offers);
  }
}
