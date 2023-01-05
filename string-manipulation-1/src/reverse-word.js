/* exported reverseWord */
/* reverse the order of the characters in a string.
create a loop that starts with the last index first. Assign the letter in that last index to a new string.
keep doing that until there are no more letters in the word.
*/
function reverseWord(word) {
  var newString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}
