/* exported reverse */
/* place elements from array in reverse order and push them into a new array.
Start from last element of array and push to the beggining of new array
*/
function reverse(array) {
  var reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
