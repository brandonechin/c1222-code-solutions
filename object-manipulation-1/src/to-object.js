/* exported toObject */
/* Make a an object whose key is the element at index 0 of an array and value is the
element at index 1 of an array. to update object in bracket notation object[key name] = value. */
function toObject(keyValuePair) {
  var anObject = {};
  anObject[keyValuePair[0]] = keyValuePair[1];
  return anObject;
}
