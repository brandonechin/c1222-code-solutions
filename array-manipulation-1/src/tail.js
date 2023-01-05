/* exported tail */
/* create a new array with all of the elements of the array that gets passed through
with the exception of the first index of that array */
function tail(array) {
  var leftOver = [];
  for (let i = 1; i < array.length; i++) {
    leftOver.push(array[i]);
  }
  return leftOver;
}
