/* exported ransomCase */
function ransomCase(string) {
  var chars = string.toLowerCase().split('');

  for (let i = 1; i < string.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  return chars.join('');
}
