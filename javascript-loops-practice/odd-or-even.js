/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddEvenStrings = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddEvenStrings.push('even');
    } else {
      oddEvenStrings.push('odd');
    }
  }
  return oddEvenStrings;
}
