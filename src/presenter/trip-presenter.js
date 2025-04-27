import { render } from '../framework/render';
import EventListView from '../view/event-list/event-list-view';
import TripSortView from '../view/trip-sort/trip-sort-view';
import EmptyRouteMsgView from '../view/empty-route-msg/empty-route-message-view';
import EventPresenter from './event-presenter';
import { updateItem } from '../utils/common';
import { sortEventByDuration, sortEventByPrice, sortEventByStartTime } from '../utils/date-time';
import { SortType } from '../const';

export default class TripPresenter {
  #eventListComponent = new EventListView();
  #eventPresenters = new Map();
  #sortComponent = null;
  #currentSortType = SortType.DAY;

  #eventObjects = [];

  constructor({tripContainerElement, eventsModel}) {
    this.tripContainerElement = tripContainerElement;
    this.eventsModel = eventsModel;
  }

  init() {
    this.#eventObjects = [...this.eventsModel.eventObjects];
    this.#renderTripEvents();
  }

  get events() {
    return this.eventsModel.eventObjects;
  }

  #renderEvent(eventObject) {
    const eventPresenter = new EventPresenter({
      eventListContainer: this.#eventListComponent.element,
      eventsModel: this.eventsModel,
      onModeChange: this.#handleModeChange,
      onDataChange: this.#handleEventChange
    });
    eventPresenter.init(eventObject);
    this.#eventPresenters.set(eventObject.id, eventPresenter);
  }

  #sortEvents(sortType) {
    switch (sortType) {
      case SortType.PRICE:
        this.#eventObjects.sort(sortEventByPrice);
        break;
      case SortType.DURATION:
        this.#eventObjects.sort(sortEventByDuration);
        break;
      default:
        this.#eventObjects.sort(sortEventByStartTime);
    }
    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType == sortType) {
      return;
    }

    this.#sortEvents(sortType);
    this.#clearEventList();
    this.#renderEventList();
  };

  #handleModeChange = () => {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleEventChange = (updatedEvent) => {
    this.#eventObjects = updateItem(this.#eventObjects, updatedEvent);
    this.#eventPresenters.get(updatedEvent.id).init(updatedEvent);
  };

  #clearEventList() {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();
  }

  #renderEventList() {
    render(this.#eventListComponent, this.tripContainerElement);
    this.#eventObjects.forEach((event) => this.#renderEvent(event));
  }

  #renderNoEvents() {
    render(new EmptyRouteMsgView(), this.tripContainerElement);
  }

  #renderTripSort() {
    this.#sortComponent = new TripSortView({
      onSortTypeChange: this.#handleSortTypeChange
    });
    render(this.#sortComponent, this.tripContainerElement);
  }

  #renderTripEvents() {
    if (this.#eventObjects.length === 0) {
      this.#renderNoEvents();
      return;
    }

    this.#renderTripSort();
    this.#renderEventList();
  }
}
