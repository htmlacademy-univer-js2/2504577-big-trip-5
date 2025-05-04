function createFiltersItemTemplate(filter, currentFilterType) {
  const { type } = filter;

  return `<div class='trip-filters__filter'>
            <input id='filter-${type}' class='trip-filters__filter-input  visually-hidden' type='radio' name='trip-filter' value='${type}' ${type === currentFilterType ? 'checked' : ''}>
            <label class='trip-filters__filter-label' for='filter-${type}'>${type}</label>
          </div>`;
}

function createTripFiltersTemplate(filterItems, currentFilterType) {
  const filtersItemTemplate = filterItems
    .map((filter) => createFiltersItemTemplate(filter, currentFilterType))
    .join('');

  return `<form class='trip-filters' action='#' method='get'>
            ${filtersItemTemplate}
            <button class='visually-hidden' type='submit'>Accept filter</button>
          </form>`;
}

export { createTripFiltersTemplate };
