/* exported filterOutStrings */
function filterOutStrings(values) {
  var numericValues = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      numericValues.push(values[i]);
    }
  }
  return numericValues;
}
