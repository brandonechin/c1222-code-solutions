/* exported capitalize */
/* create a function that capitalizes (toUpperCase()) the first letter of a string (charAt(0))
and lower cases (toLowerCase())the remaining letters of a string passed as an argument. */
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
