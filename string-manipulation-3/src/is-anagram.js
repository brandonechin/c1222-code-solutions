/* exported isAnagram */
/* turn both strings into arrays. if all the letters in the first string are present in all of the letters in the second string, return true. If not, return false. */

function isAnagram(firstString, secondString) {
  var firstStringArray = firstString.split('');
  var secondStringArray = secondString.split('');
  for (let i = 0; i < firstStringArray.length; i++) {
    if (firstStringArray[i] === ' ') {
      firstStringArray.splice(i, 1);
    }
    if (secondStringArray[i] === ' ') {
      secondStringArray.splice(i, 1);
    }
  }
  var firstStringArraySorted = firstStringArray.sort();
  var secondStringArraySorted = secondStringArray.sort();
  var newFirstString = firstStringArraySorted.join('');
  var newSecondString = secondStringArraySorted.join('');
  if (newFirstString === newSecondString) {
    return true;
  } else {
    return false;
  }
}
