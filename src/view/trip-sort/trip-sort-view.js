import AbstractView from '../../framework/view/abstract-view';
import { createSortTemplate } from './trip-sort-template';

export default class TripSortView extends AbstractView {
  get template() {
    return createSortTemplate();
  }
}
