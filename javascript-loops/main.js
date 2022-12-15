/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
var numbers = [];
var currentNumber = 0;
function getNumbersToTen() {
  while (currentNumber < 10) {
    currentNumber++;
    numbers.push(currentNumber);
  }
  return numbers;
}

var evenNumbers = [];
var currentNumbers = 0;
function getEvenNumbersToTwenty() {
  while (currentNumbers < 20) {
    currentNumbers += 2;
    evenNumbers.push(currentNumbers);
  }
  return evenNumbers;
}

var repeated = '';
var count = 0;
function repeatWord(word, times) {
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

var doubled = [];
function doubleAll(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    var numbersDbl = numbers[i] * 2;
    doubled.push(numbersDbl);
  }
  return doubled;
}

var keys = [];
function getKeys(object) {
  for (const property in object) {
    keys.push(property);
  }
  return keys;
}

var values = [];
function getValues(object) {
  for (const property in object) {
    values.push(object[property]);
  }
  return values;
}
