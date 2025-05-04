import Observable from '../framework/observable.js';
import { TYPES_FILTER } from '../const.js';

export default class FilterModel extends Observable {
  #filter = TYPES_FILTER.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  setFilter(updateType, filter) {
    this.#filter = filter;
    this._notify(updateType, filter);
  }
}
