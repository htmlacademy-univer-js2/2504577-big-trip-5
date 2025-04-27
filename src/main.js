import EventsModel from './model/events-model';
import TripPresenter from './presenter/trip-presenter';
import { render } from './framework/render';
import TripFiltersView from './view/trip-filters/trip-filters-view';
import 'flatpickr/dist/flatpickr.min.css';

const filtersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const eventsModel = new EventsModel();
const tripPresenter = new TripPresenter({
  tripContainerElement: tripEventsElement,
  eventsModel: eventsModel,
});

render(new TripFiltersView(), filtersElement);
tripPresenter.init();
