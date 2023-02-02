const takeAChance = require('./take-a-chance');

const promise = takeAChance('Brandon');

promise.then((message) => {
  console.log(message);
});

promise.catch((error) => {
  console.log(error.message);
});
