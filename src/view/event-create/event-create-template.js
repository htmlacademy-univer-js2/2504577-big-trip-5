import { TYPES_EVENT } from '../../const';
import { capitalize } from '../../utils/common';

function createTypeEventTemplate(type, checked = false) {
  const isChecked = checked ? 'checked' : '';
  return (`<div class="event__type-item">
            <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${isChecked}>
            <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalize(type)}</label>
          </div>`);
}

function createDataListOptionTemplate(name) {
  return (`<option value="${name}"></option>`);
}

function createOfferSelectorTemplate(title, price) {
  const alias = title.split(' ').pop();
  return (`<div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${alias}-1" type="checkbox" name="event-offer-${alias}">
            <label class="event__offer-label" for="event-offer-${alias}-1">
              <span class="event__offer-title">${title}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${price}</span>
            </label>
          </div>`);
}

function createEventCreateTemplate(destinations, offers) {
  const {offers: availableOffers} = offers;
  const typeEventTemplate = Object.values(TYPES_EVENT).map((type) => (type === 'flight' ? createTypeEventTemplate(type, true) : createTypeEventTemplate(type))).join('');
  const dataListOptionTemplate = destinations.map(({name}) => (createDataListOptionTemplate(name))).join('');
  const offerSelectorTemplate = availableOffers.map(({title, price}) => (createOfferSelectorTemplate(title, price))).join('');

  return (`<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${typeEventTemplate}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      Flight
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${dataListOptionTemplate}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="0">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                      ${offerSelectorTemplate}
                    </div>
                  </section>
                </section>
              </form>
            </li>`);
}

export {createEventCreateTemplate};
