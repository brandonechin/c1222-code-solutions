/* exported firstChars */
function firstChars(length, string) {
  var chars = string.split('');

  var arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(chars[i]);

  }
  return (arr.join(''));
}
