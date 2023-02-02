const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('value of evenNumbers', evenNumbers);

const orderFive = numbers.filter((num) => num > 5);
console.log('value of orderFive', orderFive);

const startWithE = names.filter((names) => names.startsWith('E'));
console.log('value of startWithE', startWithE);

const haveD = names.filter((names) => names.includes('d') || names.includes('D'));
console.log('value of haveD', haveD);
