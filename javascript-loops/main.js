/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 0;
  while (currentNumber < 10) {
    currentNumber++;
    numbers.push(currentNumber);
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumbers = 0;
  while (currentNumbers < 20) {
    currentNumbers += 2;
    evenNumbers.push(currentNumbers);
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var repeated = '';
  var count = 0;
  while (count < times) {
    count++;
    repeated += word;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    var each = string[i];
    console.log(each);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    var numbersDbl = numbers[i] * 2;
    doubled.push(numbersDbl);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (const property in object) {
    keys.push(property);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (const property in object) {
    values.push(object[property]);
  }
  return values;
}
