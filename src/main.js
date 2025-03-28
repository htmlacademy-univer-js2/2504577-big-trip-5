import PointsModel from './model/points-model';
import TripPresenter from './presenter/trip-presenter';
import { render } from './framework/render';
import TripFiltersView from './view/trip-filters/trip-filters-view';

const filtersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter({ tripContainerElement: tripEventsElement, pointsModel: pointsModel });

render(new TripFiltersView(), filtersElement);
tripPresenter.render();
