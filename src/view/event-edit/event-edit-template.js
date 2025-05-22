import { capitalize } from '../../utils/common';
import { getFormattedDate, getFormattedTime } from '../../utils/date-time';
import { TYPES_EVENT, UserAction } from '../../const';

function createTypeEventTemplate(type, isDisabled, checked = false) {
  const isChecked = checked ? 'checked' : '';
  return `<div class='event__type-item'>
            <input id='event-type-${type}-1' class='event__type-input  visually-hidden' type='radio' name='event-type' value='${type}' ${isChecked} ${isDisabled ? 'disabled' : ''}>
            <label class='event__type-label  event__type-label--${type}' for='event-type-${type}-1'>${capitalize(type)}</label>
          </div>`;
}

function createDataListOptionTemplate(name) {
  return `<option value='${name}'></option>`;
}

function createOfferSelectorTemplate(title, price, isDisabled, checked = false) {
  const alias = title.split(' ').pop();
  const isChecked = checked ? 'checked' : '';
  return `<div class='event__offer-selector'>
            <input class='event__offer-checkbox  visually-hidden' id='event-offer-${alias}-1' type='checkbox' name='event-offer-${alias}' ${isChecked} ${isDisabled ? 'disabled' : ''}>
            <label class='event__offer-label' for='event-offer-${alias}-1' name='${title.replace(/[ ,']/g, '')}'>
              <span class='event__offer-title'>${title}</span>
              &plus;&euro;&nbsp;
              <span class='event__offer-price'>${price}</span>
            </label>
          </div>`;
}

function createEventEditTemplate(point, destinations, offers, userAction) {
  const {
    type: pointType,
    destination: pointDestination = '',
    dateFrom,
    dateTo,
    basePrice,
    offers: selectedOffers = [],
    isDisabled,
    isSaving,
    isDeleting,
  } = point;

  const destinationData = pointDestination
    ? destinations.find((dest) => dest.id === pointDestination) || {}
    : {};
  const {
    name: nameDestination = '',
    description: descriptionDestination = '',
    pictures = [],
  } = destinationData;

  const availableOffersData = offers.find(
    (offer) => offer.type === pointType
  ) || { offers: [] };
  const { offers: availableOffers = [] } = availableOffersData;

  const eventStartDateTime = dateFrom === null ?
    '' : `${getFormattedDate(dateFrom, 'DD/MM/YY')} ${getFormattedTime(dateFrom)}`;
  const eventFinishDateTime = dateTo === null ?
    '' : `${getFormattedDate(dateTo, 'DD/MM/YY')} ${getFormattedTime(dateTo)}`;

  const typeEventTemplate = Object.values(TYPES_EVENT)
    .map((type) =>
      type === pointType
        ? createTypeEventTemplate(type, isDisabled, true)
        : createTypeEventTemplate(type, isDisabled)
    )
    .join('');

  const dataListOptionTemplate = destinations
    .map(({ name }) => createDataListOptionTemplate(name))
    .join('');

  const offerSelectorTemplate = availableOffers
    .map(({ id, title, price }) =>
      selectedOffers.includes(id)
        ? createOfferSelectorTemplate(title, price, isDisabled, true)
        : createOfferSelectorTemplate(title, price, isDisabled)
    )
    .join('');

  const picturesTemplate = pictures
    .map(
      ({ src, description }) =>
        `<img class='event__photo' src='${src}' alt='${description}'>`
    )
    .join('');

  const deletingWord = isDeleting ? 'Deleting...' : 'Delete';

  return `<li class='trip-events__item'>
              <form class='event event--edit' action='#' method='post'>
                <header class='event__header'>
                  <div class='event__type-wrapper'>
                    <label class='event__type  event__type-btn' for='event-type-toggle-1'>
                      <span class='visually-hidden'>Choose event type</span>
                      <img class='event__type-icon' width='17' height='17' src='img/icons/${pointType}.png' alt='Event type icon'>
                    </label>
                    <input class='event__type-toggle  visually-hidden' id='event-type-toggle-1' type='checkbox'>

                    <div class='event__type-list'>
                      <fieldset class='event__type-group'>
                        <legend class='visually-hidden'>Event type</legend>
                        ${typeEventTemplate}
                      </fieldset>
                    </div>
                  </div>

                  <div class='event__field-group  event__field-group--destination'>
                    <label class='event__label  event__type-output' for='event-destination-1'>
                      ${pointType}
                    </label>
                    <input class='event__input  event__input--destination' id='event-destination-1' type='text' name='event-destination' value='${nameDestination}' list='destination-list-1' ${isDisabled ? 'disabled' : ''}>
                    <datalist id='destination-list-1'>
                      ${dataListOptionTemplate}
                    </datalist>
                  </div>

                  <div class='event__field-group  event__field-group--time'>
                    <label class='visually-hidden' for='event-start-time-1'>From</label>
                    <input class='event__input  event__input--time' id='event-start-time-1' type='text' name='event-start-time' value='${eventStartDateTime}' ${isDisabled ? 'disabled' : ''}>
                    &mdash;
                    <label class='visually-hidden' for='event-end-time-1'>To</label>
                    <input class='event__input  event__input--time' id='event-end-time-1' type='text' name='event-end-time' value='${eventFinishDateTime}' ${isDisabled ? 'disabled' : ''}>
                  </div>

                  <div class='event__field-group  event__field-group--price'>
                    <label class='event__label' for='event-price-1'>
                      <span class='visually-hidden'>Price</span>
                      &euro;
                    </label>
                    <input class='event__input  event__input--price' id='event-price-1' type='number' name='event-price' value='${basePrice}' min='1' ${isDisabled ? 'disabled' : ''}>
                  </div>
                  <button class='event__save-btn  btn  btn--blue' type='submit' ${isDisabled ? 'disabled' : ''}>${isSaving ? 'Saving...' : 'Save'}</button>
                  <button class='event__reset-btn' type='reset' ${isDisabled ? 'disabled' : ''}>${userAction === UserAction.UPDATE_POINT ? deletingWord : 'Cancel'}</button>
                  ${userAction === UserAction.ADD_POINT ? '' : ' <button class="event__rollup-btn" type="button"><span class="visually-hidden">Open event</span></button>'}
                </header>
                <section class='event__details'>
                  ${availableOffers.length > 0 ? `<section class='event__section  event__section--offers'>
                      <h3 class='event__section-title  event__section-title--offers'>Offers</h3>
                      <div class='event__available-offers'>
                        ${offerSelectorTemplate}
                      </div>
                    </section>` : ''}
                  ${descriptionDestination || pictures.length > 0 ? `<section class='event__section  event__section--destination'>
                      <h3 class='event__section-title  event__section-title--destination'>Destination</h3>
                      ${descriptionDestination ? `<p class='event__destination-description'>${descriptionDestination}</p>` : ''}
                      ${pictures.length > 0 ? `<div class='event__photos-container'>
                          <div class='event__photos-tape'>
                            ${picturesTemplate}
                          </div>
                        </div>` : ''}
                      </section>` : ''}
                </section>
              </form>
            </li>`;
}

export { createEventEditTemplate };
