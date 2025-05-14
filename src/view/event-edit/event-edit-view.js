import AbstractStatefulView from '../../framework/view/abstract-stateful-view';
import { createEventEditTemplate } from './event-edit-template';
import { getDateInISOFormat, isFirstDateEarlierSecond } from '../../utils/date-time';
import flatpickr from 'flatpickr';
import { UserAction } from '../../const';

const BLANK_EVENT = {
  type: 'flight',
  basePrice: '0',
  dateFrom: null,
  dateTo: null,
  destination: '',
  offers: [],
};

export default class EventEditView extends AbstractStatefulView {
  #startDateTimePicker = null;
  #finishDateTimePicker = null;

  #userAtion = null;

  constructor({
    event = BLANK_EVENT,
    destinations,
    offers,
    userAction = UserAction.UPDATE_POINT,
    onFormSubmit,
    onFormClose,
    onDeleteClick,
  }) {
    super();
    this._setState(EventEditView.parsePointToState(event));
    this.#userAtion = userAction;
    this.destinations = destinations;
    this.offers = offers;
    this.handleFormSubmit = onFormSubmit;
    this.handleFormClose = onFormClose;
    this.handleDeleteClick = onDeleteClick;

    this._restoreHandlers();
  }

  _restoreHandlers() {
    const rollupBtn = this.element.querySelector('.event__rollup-btn');
    if (rollupBtn) {
      rollupBtn.addEventListener('click', this.#formCloseHandler);
    }
    this.element
      .querySelector('.event--edit')
      .addEventListener('submit', this.#formSubmitHandler);
    this.element
      .querySelector('.event__type-group')
      .addEventListener('change', this.#changeTypeHandler);
    this.element
      .querySelector('.event__input--destination')
      .addEventListener('input', this.#ChangeDestinationHandler);
    this.element
      .querySelector('.event__reset-btn')
      .addEventListener('click', this.#formDeleteClickHandler);
    this.element
      .querySelector('.event__input--price')
      .addEventListener('input', this.#changePriceHandler);
    this.element
      .querySelectorAll('.event__offer-label')
      .forEach((offer) =>
        offer.addEventListener('click', this.#changeOffersHandlers)
      );

    this.#setDatepicker();
  }

  get template() {
    return createEventEditTemplate(
      this._state,
      this.destinations,
      this.offers,
      this.#userAtion
    );
  }

  reset(event) {
    this.updateElement(EventEditView.parsePointToState(event));
  }

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

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    if (this._state.destination === '' || !this._state.dateFrom || !this._state.dateTo || this._state.basePrice < 0) {
      this.handleFormClose();
      return;
    }
    this.handleFormSubmit({ ...this._state });
  };

  #formDeleteClickHandler = (evt) => {
    evt.preventDefault();
    this.handleDeleteClick({ ...this._state });
  };

  #formCloseHandler = (evt) => {
    evt.preventDefault();
    this.handleFormClose();
  };

  #changeTypeHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({ type: evt.target.value });
  };

  #changePriceHandler = (evt) => {
    evt.preventDefault();
    this._setState({ basePrice: Number(evt.target.value) });
  };

  #ChangeDestinationHandler = (evt) => {
    const foundedDest = this.destinations.find(
      (dest) => dest.name === evt.target.value
    );
    if (foundedDest) {
      this.updateElement({ destination: foundedDest.id });
    }
  };

  #changeOffersHandlers = (evt) => {
    evt.preventDefault();
    const nameOffer = evt.currentTarget
      .getAttribute('name')
      .replaceAll('-', ' ');
    const clickedOfferId = this.offers
      .find((offers) => offers.type === this._state.type)
      .offers.find((offer) => offer.title === nameOffer).id;

    const newOffers = this._state.offers.includes(clickedOfferId)
      ? this._state.offers.filter((offer) => offer !== clickedOfferId)
      : [...this._state.offers, clickedOfferId];

    this.updateElement({ offers: newOffers });
  };

  #changeStartDateHandler = ([date]) => {
    this.updateElement({ dateFrom: getDateInISOFormat(date) });

    if (!isFirstDateEarlierSecond(date, this._state.dateTo)) {
      this.updateElement({ dateTo: getDateInISOFormat(date) });
    }
  };

  #changeFinishDateHandler = ([date]) => {
    this.updateElement({ dateTo: getDateInISOFormat(date) });
  };

  #setDatepicker() {
    this.#startDateTimePicker = flatpickr(
      this.element.querySelector('input[name=\'event-start-time\']'),
      {
        enableTime: true,
        dateFormat: 'd/m/Y H:i',
        defaultDate: this._state.dateFrom,
        onChange: this.#changeStartDateHandler,
      }
    );

    this.#finishDateTimePicker = flatpickr(
      this.element.querySelector('input[name=\'event-end-time\']'),
      {
        minDate: this._state.dateFrom,
        enableTime: true,
        dateFormat: 'd/m/Y H:i',
        defaultDate: this._state.dateTo,
        onChange: this.#changeFinishDateHandler,
      }
    );
  }

  static parsePointToState(event) {
    return { ...event };
  }
}
