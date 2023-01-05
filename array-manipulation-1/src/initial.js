/* exported initial */
/* a new array that contains the elements of an array that gets passed through
with the exception fo the last element */

function initial(array) {
  var removeLast = [];
  for (let i = 0; i < array.length - 1; i++) {
    removeLast.push(array[i]);
  }
  return removeLast;
}
