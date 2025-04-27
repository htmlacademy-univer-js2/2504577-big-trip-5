import AbstractStatefulView from '../../framework/view/abstract-stateful-view';
import { createEventEditTemplate } from './event-edit-template';
import flatpickr from 'flatpickr';

export default class EventEditView extends AbstractStatefulView {
  #startDateTimePicker = null;
  #finishDateTimePicker = null;

  constructor({ event, destinations, offers, onFormSubmit, onFormClose }) {
    super();
    this._setState(EventEditView.parsePointToState(event));
    this.destinations = destinations;
    this.offers = offers;
    this.handleFormSubmit = onFormSubmit;
    this.handleFormClose = onFormClose;

    this._restoreHandlers();
  }

  _restoreHandlers() {
    this.element
      .querySelector('.event--edit')
      .addEventListener('submit', this.#formSubmitHandler);
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#formCloseHandler);
    this.element
      .querySelector('.event__type-group')
      .addEventListener('change', this.#changeTypeEventHandler);
    this.element
      .querySelector('.event__input--destination')
      .addEventListener('input', this.#eventDestinationChangeHandler);

    this.#setDatepicker();
  }

  get template() {
    return createEventEditTemplate(this._state, this.destinations, this.offers);
  }

  reset(event) {
    this.updateElement(EventEditView.parsePointToState(event));
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.handleFormSubmit();
  };

  #formCloseHandler = (evt) => {
    evt.preventDefault();
    this.handleFormClose();
  };

  #changeTypeEventHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({ newType: evt.target.value });
  };

  #eventDestinationChangeHandler = (evt) => {
    evt.preventDefault();
    const foundedDest = this.destinations.find(
      (dest) => dest.name === evt.target.value
    );
    if (foundedDest) {
      this.updateElement({ newDestination: foundedDest.id });
    }
  };

  removeElement() {
    super.removeElement();
    if (this.#startDateTimePicker) {
      this.#startDateTimePicker.destroy();
      this.#startDateTimePicker = null;
    }
    if (this.#finishDateTimePicker) {
      this.#finishDateTimePicker.destroy();
      this.#finishDateTimePicker = null;
    }
  }

  #startDateChangeHandler = ([date]) => {
    this.updateElement({ dateFrom: date });
  };

  #finishDateChangeHandler = ([date]) => {
    this.updateElement({ dateTo: date });
  };

  #setDatepicker() {
    this.#startDateTimePicker = flatpickr(
      this.element.querySelector('input[name=\'event-start-time\']'),
      {
        enableTime: true,
        dateFormat: 'd/m/Y H:i',
        defaultDate: this._state.dateFrom,
        onChange: this.#startDateChangeHandler,
      }
    );

    this.#finishDateTimePicker = flatpickr(
      this.element.querySelector('input[name=\'event-end-time\']'),
      {
        minDate: this._state.dateFrom,
        enableTime: true,
        dateFormat: 'd/m/Y H:i',
        defaultDate: this._state.dateTo,
        onChange: this.#finishDateChangeHandler,
      }
    );
  }

  static parsePointToState(event) {
    return { ...event, newType: event.type, newDestination: event.destination };
  }
}
