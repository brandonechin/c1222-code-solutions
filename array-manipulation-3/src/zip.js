/* exported zip */
/* loop through first array and second array and push the first element of the first array and the first element of the second array into an array. Do this for all elements of the array. */
function zip(first, second) {
  var newArray = [];
  if (first.length <= second.length) {
    for (let i = 0; i < first.length; i++) {
      var temp = [];
      temp.push(first[i]);
      temp.push(second[i]);
      newArray.push(temp);
    }
  } else {
    for (let i = 0; i < second.length; i++) {
      var tempTwo = [];
      tempTwo.push(first[i]);
      tempTwo.push(second[i]);
      newArray.push(tempTwo);
    }
  }
  return newArray;
}
