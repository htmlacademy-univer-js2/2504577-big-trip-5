import { render, remove, RenderPosition } from "../framework/render";
import UiBlocker from "../framework/ui-blocker/ui-blocker";
import EventListView from "../view/event-list/event-list-view";
import TripSortView from "../view/trip-sort/trip-sort-view";
import EmptyRouteMsgView from "../view/empty-route-msg/empty-route-message-view";
import LoadingView from "../view/loading-events/loading-view";
import EventPresenter from "./event-presenter";
import {
  sortEventByDuration,
  sortEventByPrice,
  sortEventByStartTime,
} from "../utils/date-time";
import { SortType, TYPES_FILTER, UpdateType, UserAction } from "../const";
import NewEventPresenter from "./new-event-presenter";
import { filter } from "../utils/filter";

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export default class TripPresenter {
  #eventsModel = null;
  #filterModel = null;

  #eventListComponent = new EventListView();
  #loadingComponent = new LoadingView();
  #tripContainerElement = null;
  #sortComponent = null;
  #noEventsComponent = null;

  #eventPresenters = new Map();
  #newEventPresenter = null;

  #filterType = TYPES_FILTER.EVERYTHING;
  #currentSortType = SortType.DAY;
  #isLoading = true;
  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT,
  });

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
    if (this.#noEventsComponent) {
      remove(this.#noEventsComponent);
    }
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

  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#eventPresenters.get(update.id).setSaving();
        try {
          await this.#eventsModel.updateEvent(updateType, update);
        } catch (err) {
          this.#eventPresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.ADD_POINT:
        this.#newEventPresenter.setSaving();
        try {
          await this.#eventsModel.addEvent(updateType, update);
        } catch (err) {
          this.#newEventPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#eventPresenters.get(update.id).setDeleting();
        try {
          await this.#eventsModel.deleteEvent(updateType, update);
        } catch (err) {
          this.#eventPresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.CANCEL_CREATION:
        this.#handleModelEvent(updateType)
    }

    this.#uiBlocker.unblock();
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
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
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
    remove(this.#loadingComponent);
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
      loadErr: this.#eventsModel.loadErr,
    });
    render(this.#noEventsComponent, this.#tripContainerElement);
  }

  #renderLoading() {
    render(
      this.#loadingComponent,
      this.#tripContainerElement,
      RenderPosition.AFTERBEGIN
    );
  }

  #renderTripSort() {
    this.#sortComponent = new TripSortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });
    render(this.#sortComponent, this.#tripContainerElement);
  }

  #renderTripEvents() {
    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }

    if (this.events.length === 0) {
      render(this.#eventListComponent, this.#tripContainerElement);
      this.#renderNoEvents();
      return;
    }

    this.#renderTripSort();
    render(this.#eventListComponent, this.#tripContainerElement);
    this.events.forEach((event) => this.#renderEvent(event));
  }
}
