import { render, remove } from '../framework/render';
import EventListView from '../view/event-list/event-list-view';
import TripSortView from '../view/trip-sort/trip-sort-view';
import EmptyRouteMsgView from '../view/empty-route-msg/empty-route-message-view';
import EventPresenter from './event-presenter';
import {
  sortEventByDuration,
  sortEventByPrice,
  sortEventByStartTime,
} from '../utils/date-time';
import { SortType, TYPES_FILTER, UpdateType, UserAction } from '../const';
import NewEventPresenter from './new-event-presenter';
import { filter } from '../utils/filter';

export default class TripPresenter {
  #eventsModel = null;
  #filterModel = null;

  #eventListComponent = new EventListView();
  #tripContainerElement = null;
  #sortComponent = null;
  #noEventsComponent = null;

  #eventPresenters = new Map();
  #newEventPresenter = null;

  #filterType = TYPES_FILTER.EVERYTHING;
  #currentSortType = SortType.DAY;

  constructor({
    tripContainerElement,
    eventsModel,
    filterModel,
    onNewEventDestroy,
  }) {
    this.#tripContainerElement = tripContainerElement;

    this.#eventsModel = eventsModel;
    this.#filterModel = filterModel;

    this.#newEventPresenter = new NewEventPresenter({
      eventListContainer: this.#eventListComponent.element,
      eventsModel: this.#eventsModel,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewEventDestroy,
    });

    this.#eventsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  init() {
    this.#renderTripEvents();
  }

  createEvent() {
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, TYPES_FILTER.EVERYTHING);
    this.#newEventPresenter.init();
  }

  get events() {
    this.#filterType = this.#filterModel.filter;
    const events = this.#eventsModel.eventObjects;
    const filteresEvents = filter[this.#filterType](events);

    switch (this.#currentSortType) {
      case SortType.DURATION:
        return filteresEvents.sort(sortEventByDuration);
      case SortType.PRICE:
        return filteresEvents.sort(sortEventByPrice);
    }

    return filteresEvents.sort(sortEventByStartTime);
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#eventsModel.updateEvent(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#eventsModel.addEvent(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#eventsModel.deleteEvent(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#eventPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderTripEvents();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard(true);
        this.#renderTripEvents();
        break;
    }
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearBoard();
    this.#renderTripEvents();
  };

  #handleModeChange = () => {
    this.#newEventPresenter.destroy();
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  #clearBoard(resetSortType = false) {
    this.#newEventPresenter.destroy();
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();

    remove(this.#sortComponent);
    if (this.#noEventsComponent) {
      remove(this.#noEventsComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #renderEvent(eventObject) {
    const eventPresenter = new EventPresenter({
      eventListContainer: this.#eventListComponent.element,
      eventsModel: this.#eventsModel,
      onModeChange: this.#handleModeChange,
      onDataChange: this.#handleViewAction,
    });
    eventPresenter.init(eventObject);
    this.#eventPresenters.set(eventObject.id, eventPresenter);
  }

  #renderNoEvents() {
    this.#noEventsComponent = new EmptyRouteMsgView({
      filterType: this.#filterType,
    });
    render(this.#noEventsComponent, this.#tripContainerElement);
  }

  #renderTripSort() {
    this.#sortComponent = new TripSortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });
    render(this.#sortComponent, this.#tripContainerElement);
  }

  #renderTripEvents() {
    if (this.events.length === 0) {
      this.#renderNoEvents();
      return;
    }

    this.#renderTripSort();
    render(this.#eventListComponent, this.#tripContainerElement);
    this.events.forEach((event) => this.#renderEvent(event));
  }
}
