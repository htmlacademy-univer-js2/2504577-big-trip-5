import { render } from '../render';
import EventCreateView from '../view/event-create/event-create-view';
import EventEditView from '../view/event-edit/event-edit-view';
import EventListView from '../view/event-list/event-list-view';
import EventView from '../view/event/event-view';
import TripSortView from '../view/trip-sort/trip-sort-view';

export default class TripPresenter {
  eventListComponent = new EventListView();

  constructor({tripContainerElement}) {
    this.tripContainerElement = tripContainerElement;
  }

  render() {
    render(new TripSortView(), this.tripContainerElement);
    render(this.eventListComponent, this.tripContainerElement);
    render(new EventEditView(), this.eventListComponent.getElement());
    render(new EventCreateView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.eventListComponent.getElement());
    }
  }
}
