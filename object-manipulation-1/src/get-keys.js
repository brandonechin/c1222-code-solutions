/* exported getKeys */
/* Get the property within an object and push it into an array. */

function getKeys(object) {
  var propertyArray = [];
  for (const property in object) {
    propertyArray.push(property);
  }
  return propertyArray;
}
