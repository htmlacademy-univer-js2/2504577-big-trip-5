import AbstractView from '../../framework/view/abstract-view';
import { createTripFiltersTemplate } from './trip-filters-template';

export default class TripFiltersView extends AbstractView {
  get template() {
    return createTripFiltersTemplate();
  }
}
