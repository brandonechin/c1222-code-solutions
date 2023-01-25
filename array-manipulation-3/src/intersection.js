/* exported intersection */
/* create an empty array. if an element in the first array is the same as an element in the second array, push into the empty array. */

function intersection(first, second) {
  var newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  // console.log(newArray);
  return newArray;
}
