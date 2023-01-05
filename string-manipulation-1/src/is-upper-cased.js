/* exported isUpperCased */
/* a string will be passed through a function named isUpperCased
and we need to determine if all the characters in the word are uppercased */
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
