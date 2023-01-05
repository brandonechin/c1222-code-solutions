/* exported isVowel */
/* A character with a datatype string will be passed through the function
if the character is a vowel, return true, if it not a vowel return false. */
function isVowel(char) {
  if (char.toUpperCase() === 'A' || char.toUpperCase() === 'E' || char.toUpperCase() === 'I' || char.toUpperCase() === 'O' || char.toUpperCase() === 'U') {
    return true;
  } else {
    return false;
  }
}
