/* exported isLowerCased */
/* a string will be passed through a function named isLowerCased
and we need to determine if all the characters in the word are lowercased */
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
