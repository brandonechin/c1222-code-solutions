/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  var upperCaseFirstIndex = lowerCase[0].toUpperCase() + lowerCase.slice(1);
  if (lowerCase[0] === 'j') {
    var javascript = lowerCase[0].toUpperCase() + lowerCase.substring(1, 4) + lowerCase[4].toUpperCase() + lowerCase.substring(5);
    return javascript;
  } else {
    return upperCaseFirstIndex;
  }
}
