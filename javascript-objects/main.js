var student = {
  firstName: 'Brandon',
  lastName: 'Chin',
  age: '29'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);

student.livesInIrvine = 'true';
student.previousOccupation = 'Accountant';
console.log('Value of liveInIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);
console.log('Value of student', student);

var vehicle = {
  make: 'Acura',
  model: 'ILX',
  year: '2016'
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = 'false';
console.log('Value of color:', vehicle['color']);
console.log('Value of isConvertible:', vehicle['isConvertible']);
console.log('Value of Vehicle:', vehicle);

var pet = {
  name: 'Annie',
  type: 'Dog'
};

delete pet.name;
delete pet.type;
console.log('Value of Pet:', pet);
