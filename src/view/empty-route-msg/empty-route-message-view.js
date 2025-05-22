import AbstractView from '../../framework/view/abstract-view';
import { createEmptyRouteMsgTemplate } from './empty-route-msg-template';

export default class EmptyRouteMsgView extends AbstractView {
  #filterType = null;
  #loadErr = null;

  constructor({filterType, loadErr}) {
    super();
    this.#filterType = filterType;
    this.#loadErr = loadErr;
  }

  get template() {
    return createEmptyRouteMsgTemplate(this.#filterType, this.#loadErr);
  }
}
