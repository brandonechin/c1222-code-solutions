/* exported difference */
/* create an empty array. loop through both arrays. if an element exists in both arrays, don't push it into the empty array. */
function difference(first, second) {
  var newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  // console.log(newArray);
  return newArray;
}
