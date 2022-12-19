function convertMinutesToSeconds(minutes) {
  var mutltiply = minutes * 60;
  return mutltiply;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds result:', convertMinutesToSecondsResult);

function greet(name) {
  var concatenate = 'Hey, ' + name;
  return concatenate;
}

var hey = greet('beavis');
console.log('greet result:', hey);

function getArea(width, height) {
  var multiply = width * height;
  return multiply;
}

var area = getArea(17, 42);
console.log('area result:', area);

function getFirstName(person) {
  var object = person;
  return object.firstName;
}

var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('First name result:', firstName);

function getLastElement(array) {
  var list = array;
  var length = list.length;
  var lastIndex = length - 1;
  var lastItem = list[lastIndex];
  return lastItem;
}

var gas = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Last element result:', gas);
