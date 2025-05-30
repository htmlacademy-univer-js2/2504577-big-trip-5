import Observable from '../framework/observable.js';
import { TypesFilter } from '../const.js';

export default class FilterModel extends Observable {
  #filter = TypesFilter.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  setFilter(updateType, filter) {
    this.#filter = filter;
    this._notify(updateType, filter);
  }
}
