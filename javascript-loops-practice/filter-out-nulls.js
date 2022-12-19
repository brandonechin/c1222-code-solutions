/* exported filterOutNulls */
function filterOutNulls(values) {
  var numericValues = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      numericValues.push(values[i]);
    }
  }
  return numericValues;
}
