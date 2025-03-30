import { TYPES_FILTER } from '../../const';

function createFiltersItemTemplate(filter, checked = false) {
  const isChecked = checked ? 'checked' : '';
  return (`<div class="trip-filters__filter">
            <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" ${isChecked}>
            <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
          </div>`);
}

function createTripFiltersTemplate() {
  const filtersItemTemplate = Object.values(TYPES_FILTER).map((filter) => (filter === 'everything' ? createFiltersItemTemplate(filter, true) : createFiltersItemTemplate(filter))).join('');
  return (`<form class="trip-filters" action="#" method="get">
            ${filtersItemTemplate}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`);
}


export {createTripFiltersTemplate};
