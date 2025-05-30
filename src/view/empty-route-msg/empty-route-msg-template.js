import { TypesFilter } from '../../const';

const msg = {
  [TypesFilter.EVERYTHING]: 'Click New Event to create your first point',
  [TypesFilter.FUTURE]: 'There are no future events now',
  [TypesFilter.PAST]: 'There are no past events now',
  [TypesFilter.PRESENT]: 'There are no present events now',
};

function createEmptyRouteMsgTemplate(filterType, loadErr) {
  const m = loadErr
    ? 'Failed to load latest route information'
    : msg[filterType];
  return `<p class='trip-events__msg'>${m}</p>`;
}

export { createEmptyRouteMsgTemplate };
