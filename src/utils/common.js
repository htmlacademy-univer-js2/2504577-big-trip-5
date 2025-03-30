function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export {capitalize, reverseString, updateItem};
