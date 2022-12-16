/* exported getWords */
/* a string of words will be passed through a function as an argument.
the string must be each word in the string must be pushed (.push()) into a list. */
function getWords(string) {
  if (string.length > 0) {
    return string.split(' ');
  } else {
    return [];
  }
}
