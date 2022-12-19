/* exported getValues */
/* Get the value of a property within an object and push into a new array.
for in loop to access properties of object. push method. object[key] to get the value. */
function getValues(object) {
  var valueArray = [];
  for (const property in object) {
    valueArray.push(object[property]);
  }
  return valueArray;
}
