const TYPES_FILTER = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

function createFiltersItemTemplate(filter, checked = false) {
  return (`<div class="trip-filters__filter">
            <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" ${checked ? 'checked' : ''}>
            <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
          </div>`);
}

function createTripFiltersTemplate() {
  return (`<form class="trip-filters" action="#" method="get">
            ${Object.values(TYPES_FILTER).map((filter) => (filter === 'everything' ? createFiltersItemTemplate(filter, true) : createFiltersItemTemplate(filter))).join('')}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`);
}


export {createTripFiltersTemplate};
