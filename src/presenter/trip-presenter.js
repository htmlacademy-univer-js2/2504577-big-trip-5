import { render } from '../framework/render';
import EventListView from '../view/event-list/event-list-view';
import TripSortView from '../view/trip-sort/trip-sort-view';
import EmptyRouteMsgView from '../view/empty-route-msg/empty-route-message-view';
import EventPresenter from './event-presenter';
import { updateItem } from '../utils/common';

export default class TripPresenter {
  #eventListComponent = new EventListView();
  #eventPresenters = new Map();

  #eventObjects = [];

  constructor({tripContainerElement, eventsModel}) {
    this.tripContainerElement = tripContainerElement;
    this.eventsModel = eventsModel;
  }

  init() {
    this.#eventObjects = [...this.eventsModel.eventObjects];
    this.#renderTripEvents();
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

  #handleModeChange = () => {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleEventChange = (updatedEvent) => {
    this.#eventObjects = updateItem(this.#eventObjects, updatedEvent);
    this.#eventPresenters.get(updatedEvent.id).init(updatedEvent);
  };

  #renderEventList() {
    render(this.#eventListComponent, this.tripContainerElement);
    this.#eventObjects.forEach((event) => this.#renderEvent(event));
  }

  #renderNoEvents() {
    render(new EmptyRouteMsgView(), this.tripContainerElement);
  }

  #renderTripSort() {
    render(new TripSortView(), this.tripContainerElement);
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
