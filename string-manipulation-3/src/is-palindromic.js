/* exported isPalindromic */
/* Turn the string into an array. Reverse the array. Join the array back into a string. compare the new string to the old string. */

function isPalindromic(string) {
  var newString = string.split('');
  var convertToArray = string.split('');
  var reverseArray = convertToArray.reverse();
  for (let i = 0; i < string.length; i++) {
    if (newString[i] === ' ') {
      newString.splice(i, 1);
    }
    if (reverseArray[i] === ' ') {
      reverseArray.splice(i, 1);
    }
  }

  if (newString.join('') === reverseArray.join('')) {
    return true;
  }
  return false;
}
