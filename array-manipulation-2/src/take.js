/* exported take */
function take(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (let i = 0; i <= count - 1; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
