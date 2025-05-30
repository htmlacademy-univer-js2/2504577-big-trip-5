import { TypesFilter, UpdateType } from '../const';
import { remove, render, replace } from '../framework/render';
import { filter } from '../utils/filter';
import TripFiltersView from '../view/trip-filters/trip-filters-view';

export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #eventsModel = null;
  #filterComponent = null;

  constructor({ filterContainer, filterModel, eventsModel }) {
    this.#filterContainer = filterContainer;
    this.#eventsModel = eventsModel;
    this.#filterModel = filterModel;

    this.#eventsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const events = this.#eventsModel.events;

    return Object.values(TypesFilter).map((type) => ({
      type,
      count: filter[type](events).length,
    }));
  }

  init() {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new TripFiltersView({
      filters: filters,
      currentFilterType: this.#filterModel.filter,
      onFilterTypeChange: this.#handleFilterTypeChange,
    });

    if (!prevFilterComponent) {
      render(this.#filterComponent, this.#filterContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }

    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
