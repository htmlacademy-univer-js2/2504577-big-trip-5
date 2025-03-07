import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

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


const getFormattedDate = (dateStr, format = 'YYYY-MM-DD') => (dayjs(dateStr).format(format));
const getFormattedMonthDay = (dateStr) => (dayjs(dateStr).format('MMM DD').toUpperCase());
const getFormattedDateTime = (dateStr) => (dayjs(dateStr).format('YYYY-MM-DDTHH:mm'));
const getFormattedTime = (dateStr) => (dayjs(dateStr).format('HH:mm'));

export {capitalize, reverseString, formatDateDifference, getFormattedDate, getFormattedDateTime, getFormattedMonthDay, getFormattedTime};


