/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var chars = string.split('');

  var temp = chars[firstIndex];

  chars[firstIndex] = chars[secondIndex];

  chars[secondIndex] = temp;

  return chars.join('');
}
