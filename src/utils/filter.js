import { TYPES_FILTER } from '../const';
import { isEventInFuture, isEventInPast, isEventInPresent } from './date-time';

const filter = {
  [TYPES_FILTER.EVERYTHING]: (events) => events,
  [TYPES_FILTER.FUTURE]: (events) =>
    events.filter((event) => isEventInFuture(event.dateFrom)),
  [TYPES_FILTER.PRESENT]: (events) =>
    events.filter((event) => isEventInPresent(event.dateFrom, event.dateTo)),
  [TYPES_FILTER.PAST]: (events) =>
    events.filter((event) => isEventInPast(event.dateTo)),
};

export { filter };
