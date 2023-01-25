/* exported flatten */
/* create an empty array */
/* loop through every element of the array. If the element is an array, loop through the inner array and push its values to the empty array. If the element is not another array, push the element into the array. */
function flatten(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
