import { createElement } from '../render';

const TYPES_SORT = ['day', 'event', 'time', 'price', 'offers'];

function createSortItemTemplate(sort, checked = false, disabled = false) {
  return (`<div class="trip-sort__item  trip-sort__item--${sort}">
            <input id="sort-${sort}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sort}"
            ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
            <label class="trip-sort__btn" for="sort-${sort}">${sort}</label>
          </div>`);
}

function createSortTemplate() {
  return (`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            ${TYPES_SORT.map((sort) => {
              if (['event', 'offers'].includes(sort)) {
                return createSortItemTemplate(sort, false, true);
              } else if (sort === 'day') {
                return createSortItemTemplate(sort, true);
              } else {
                return createSortItemTemplate(sort);
              }
            }).join('')}
          </form>`);
}

export default class TripSortView {
  getTemplate() {
    return createSortTemplate();
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
