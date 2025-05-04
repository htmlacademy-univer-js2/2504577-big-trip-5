import AbstractView from '../../framework/view/abstract-view';
import { createEmptyRouteMsgTemplate } from './empty-route-msg-template';

export default class EmptyRouteMsgView extends AbstractView {
  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createEmptyRouteMsgTemplate(this.#filterType);
  }
}
