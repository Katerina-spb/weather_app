
function getDate (timezone, inputDate) {
  let date = inputDate || new Date();
  let offset = date.getTimezoneOffset()* 60 * 1000;
  var ms = date.getTime() + offset + timezone * 1000;
  var newDate = new Date(ms);
  return newDate;
}

var helpers = {
  getDate: getDate,
}
export default helpers;