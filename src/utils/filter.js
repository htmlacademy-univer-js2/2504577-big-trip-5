import { TypesFilter } from '../const';
import { isEventInFuture, isEventInPast, isEventInPresent } from './date-time';

const filter = {
  [TypesFilter.EVERYTHING]: (events) => events,
  [TypesFilter.FUTURE]: (events) =>
    events.filter((event) => isEventInFuture(event.dateFrom)),
  [TypesFilter.PRESENT]: (events) =>
    events.filter((event) => isEventInPresent(event.dateFrom, event.dateTo)),
  [TypesFilter.PAST]: (events) =>
    events.filter((event) => isEventInPast(event.dateTo)),
};

export { filter };
