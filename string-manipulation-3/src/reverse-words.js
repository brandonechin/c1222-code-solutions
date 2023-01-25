/* exported reverseWords */
function reverseWords(string) {
  var convertToArray = string.split('');
  // console.log('value of convertToArray', convertToArray);
  var reverseArray = convertToArray.reverse();
  // console.log('value of reverseArray', reverseArray);
  var newString = reverseArray.join('');
  // console.log('value of newString', newString);
  var newConvertToArray = newString.split(' ');
  // console.log('value of newConvertToArray', newConvertToArray);
  var reverseNewArray = newConvertToArray.reverse();
  // console.log('value of reverseNewArray', reverseNewArray);
  var finalString = reverseNewArray.join(' ');
  // console.log('value of finalString', finalString);

  return finalString;
}
