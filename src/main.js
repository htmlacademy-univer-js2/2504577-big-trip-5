import EventsModel from './model/events-model';
import FilterModel from './model/filter-model';
import TripPresenter from './presenter/trip-presenter';
import FilterPresenter from './presenter/filter-presenter';
import { render } from './framework/render';
import NewEventButtonView from './view/new-event-button/new-event-button-view';

import 'flatpickr/dist/flatpickr.min.css';

const filtersElement = document.querySelector('.trip-controls__filters');
const siteHeaderElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');

const eventsModel = new EventsModel();
const filterModel = new FilterModel();
const tripPresenter = new TripPresenter({
  tripContainerElement: tripEventsElement,
  eventsModel,
  filterModel,
  onNewEventDestroy: handleNewEventFormClose,
});
const filterPresenter = new FilterPresenter({
  filterContainer: filtersElement,
  filterModel,
  eventsModel,
});

const newEventButtonComponent = new NewEventButtonView({
  onclick: handleNewEventButtonClick,
});

function handleNewEventFormClose() {
  newEventButtonComponent.element.disabled = false;
}

function handleNewEventButtonClick() {
  tripPresenter.createEvent();
  newEventButtonComponent.element.disabled = true;
}

render(newEventButtonComponent, siteHeaderElement);
filterPresenter.init();
tripPresenter.init();
