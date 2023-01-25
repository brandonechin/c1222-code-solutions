/* exported union */
/* create an empty array. if an element in the second array does not exist in the first array, push  into the empty container. */
function union(first, second) {
  var newArray = [];
  for (let i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (let i = 0; i < first.length; i++) {
    if (i < second.length) {
      if (!first.includes(second[i])) {
        newArray.push(second[i]);
      }
    }
  }
  return newArray;
}
