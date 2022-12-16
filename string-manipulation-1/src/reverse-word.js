/* exported reverseWord */
/* reverse the order of the characters in a string */
function reverseWord(word) {
  var newString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}
