/* exported capitalizeWords */
function capitalizeWords(string) {
  var chars = string.toLowerCase().split(' ');

  for (let i = 0; i < chars.length; i++) {
    chars[i] = chars[i][0].toUpperCase() + chars[i].substring(1);

  }
  return chars.join(' ');
}
