import { createElement } from '../render';

const TYPES_FILTER = ['everything', 'future', 'present', 'past'];

function createFiltersItemTemplate(filter, checked = false) {
  return (`<div class="trip-filters__filter">
            <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" ${checked ? 'checked' : ''}>
            <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
          </div>`);
}

function createTripFiltersTemplate() {
  return (`<form class="trip-filters" action="#" method="get">
            ${TYPES_FILTER.map((filter) => (filter === 'everything' ? createFiltersItemTemplate(filter, true) : createFiltersItemTemplate(filter))).join('')}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`);
}

export default class TripFiltersView {
  getTemplate() {
    return createTripFiltersTemplate();
  }

  getElement() {
    if (!this.element){
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
