import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

function formatDateDifference(startDate, endDate) {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  const diff = dayjs.duration(end.diff(start));

  const days = diff.days();
  const hours = diff.hours();
  const minutes = diff.minutes();

  const result = [];
  if (days > 0) {
    result.push(`${days}D`);
  }
  if (hours > 0){
    result.push(`${hours}H`);
  }
  if (minutes > 0){
    result.push(`${minutes}M`);
  }

  return result.join(' ');
}

function isEventInFuture(dateTimeEvent) {
  return dayjs(dateTimeEvent).isAfter(dayjs());
}

function isEventInPast(dateTimeEvent) {
  return dayjs(dateTimeEvent).isBefore(dayjs());
}

function isEventInPresent(startDateTimeEvent, finishDateTimeEvent) {
  return dayjs(startDateTimeEvent).isBefore(dayjs()) && dayjs(finishDateTimeEvent).isAfter(dayjs());
}


const getFormattedDate = (dateStr, format = 'YYYY-MM-DD') => (dayjs(dateStr).format(format));
const getFormattedMonthDay = (dateStr) => (dayjs(dateStr).format('MMM DD').toUpperCase());
const getFormattedDateTime = (dateStr) => (dayjs(dateStr).format('YYYY-MM-DDTHH:mm'));
const getFormattedTime = (dateStr) => (dayjs(dateStr).format('HH:mm'));

export {formatDateDifference, getFormattedDate, getFormattedDateTime, getFormattedMonthDay, getFormattedTime};
