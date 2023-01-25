/* exported unique */
/* create an empty array. loop through each element of array and push the element only if we see it in the array once. */
function unique(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
