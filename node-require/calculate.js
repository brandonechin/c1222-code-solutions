if (process.argv[3] === 'plus') {
  const add = require('./add');
  console.log(`Result: ${add.addNumbers(Number(process.argv[2]), Number(process.argv[4]))}`);
}
if (process.argv[3] === 'minus') {
  const subtract = require('./subtract');
  console.log(`Result: ${subtract.subtractNumbers(Number(process.argv[2]), Number(process.argv[4]))}`);
}
if (process.argv[3] === 'times') {
  const multiply = require('./multiply');
  console.log(`Result: ${multiply.multiplyNumbers(Number(process.argv[2]), Number(process.argv[4]))}`);
}
if (process.argv[3] === 'over') {
  const divide = require('./divide');
  console.log(`Result: ${divide.divideNumbers(Number(process.argv[2]), Number(process.argv[4]))}`);
}
