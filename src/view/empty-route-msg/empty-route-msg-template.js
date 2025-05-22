import { TYPES_FILTER } from '../../const';

const msg = {
  [TYPES_FILTER.EVERYTHING]: 'Click New Event to create your first point',
  [TYPES_FILTER.FUTURE]: 'There are no future events now',
  [TYPES_FILTER.PAST]: 'There are no past events now',
  [TYPES_FILTER.PRESENT]: 'There are no present events now',
};

function createEmptyRouteMsgTemplate(filterType, loadErr) {
  const m = loadErr
    ? 'Failed to load latest route information'
    : msg[filterType];
  return `<p class='trip-events__msg'>${m}</p>`;
}

export { createEmptyRouteMsgTemplate };
