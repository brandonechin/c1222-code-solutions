/* exported lastChars */
function lastChars(length, string) {
  var chars = string.split('');

  var charsReversed = chars.reverse();

  var arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(charsReversed[i]);
  }

  var arrReverse = arr.reverse();

  var arrReverseJoin = arrReverse.join('');

  return arrReverseJoin;
}
