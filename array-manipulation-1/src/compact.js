/* exported compact */
/* an array is being passed through a function. The falsy values need to be removed.
from the array. look at each index and determine if the value is a truthy value and push into new array.
*/
function compact(array) {
  var compactArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!!array[i] === true) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}
