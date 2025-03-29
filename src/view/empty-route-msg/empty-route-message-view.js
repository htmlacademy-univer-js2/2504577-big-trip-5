import AbstractView from '../../framework/view/abstract-view';
import { createEmptyRouteMsgTemplate } from './empty-route-msg-template';

export default class EmptyRouteMsgView extends AbstractView {
  get template() {
    return createEmptyRouteMsgTemplate();
  }
}
