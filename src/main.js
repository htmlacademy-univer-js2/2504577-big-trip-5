import TripPresenter from "./presenter/trip-presenter";
import { render } from "./render";
import TripFiltersView from "./view/trip-filters-view";

const filters = document.querySelector(".trip-controls__filters");
const tripEvents = document.querySelector(".trip-events");
const tripPresenter = new TripPresenter({tripContainer: tripEvents});

render(new TripFiltersView(), filters);
tripPresenter.init();

