/* exported numVowels */
function numVowels(string) {
  var vowelsCounter = 0;
  var chars = string.toLowerCase().split('');
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === 'a' || chars[i] === 'e' || chars[i] === 'i' || chars[i] === 'o' || chars[i] === 'u') {
      vowelsCounter++;
    }
  }
  return vowelsCounter;
}
