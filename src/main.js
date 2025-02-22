import TripPresenter from './presenter/trip-presenter';
import { render } from './render';
import TripFiltersView from './view/trip-filters/trip-filters-view';

const filtersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({ tripContainerElement: tripEventsElement });

render(new TripFiltersView(), filtersElement);
tripPresenter.render();

