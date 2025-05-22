import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

function formatDateDifference(startDate, endDate) {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const diff = dayjs.duration(end.diff(start));
  const days = end.diff(start, 'day');
  const hours = diff.hours();
  const minutes = diff.minutes();

  const result = [];
  if (days > 0) {
    result.push(`${days.toString().padStart(2, '0')}D`);
  }
  if (hours > 0 || days > 0) {
    result.push(`${hours.toString().padStart(2, '0')}H`);
  }
  result.push(`${minutes.toString().padStart(2, '0')}M`);

  return result.join(' ');
}

function isEventInFuture(startDateTimeEvent) {
  return dayjs(startDateTimeEvent).isAfter(dayjs());
}

function isEventInPast(finishDateTimeEvent) {
  return dayjs(finishDateTimeEvent).isBefore(dayjs());
}

function isEventInPresent(startDateTimeEvent, finishDateTimeEvent) {
  return (
    dayjs(startDateTimeEvent).isBefore(dayjs()) &&
    dayjs(finishDateTimeEvent).isAfter(dayjs())
  );
}

function isFirstDateEarlierSecond(firstDate, secondDate) {
  if (dayjs(firstDate).isBefore(dayjs(secondDate))) {
    return true;
  }
  return false;
}

function getDateInISOFormat(date) {
  return dayjs(date).toISOString();
}

function sortEventByStartTime(eventA, eventB) {
  return dayjs(eventA.dateFrom).diff(dayjs(eventB.dateFrom));
}

function sortEventByDuration(eventA, eventB) {
  return (
    dayjs.duration(dayjs(eventB.dateTo).diff(dayjs(eventB.dateFrom))) -
    dayjs.duration(dayjs(eventA.dateTo).diff(dayjs(eventA.dateFrom)))
  );
}

function sortEventByPrice(eventA, eventB) {
  return Number(eventB.basePrice) - Number(eventA.basePrice);
}

const getFormattedDate = (dateStr, format = 'YYYY-MM-DD') =>
  dayjs(dateStr).format(format);

const getFormattedMonthDay = (dateStr) =>
  dayjs(dateStr).format('MMM DD').toUpperCase();

const getFormattedDateTime = (dateStr) =>
  dayjs(dateStr).format('YYYY-MM-DDTHH:mm');

const getFormattedTime = (dateStr) => dayjs(dateStr).format('HH:mm');

export {
  isFirstDateEarlierSecond,
  sortEventByDuration,
  sortEventByPrice,
  sortEventByStartTime,
  isEventInFuture,
  isEventInPast,
  isEventInPresent,
  formatDateDifference,
  getFormattedDate,
  getFormattedDateTime,
  getFormattedMonthDay,
  getFormattedTime,
  getDateInISOFormat,
};
