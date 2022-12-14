var num1 = 1;
var num2 = 2;
var num3 = 3;
var maximumValue = Math.max(num1, num2, num3);
console.log(maximumValue);

var heroes = ['Mermaid Man', 'Barnacle Boy', 'Spider Man', 'Flash'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log(randomIndex);

var randomHero = heroes[randomIndex];
console.log(randomHero);

var library = [{ title: 'Twilight', author: 'I dunno' }, { title: 'Harry Potter', author: 'J.K. Rowling' }, { title: 'Cat in The Hat', author: 'Dr. Suess' }];
var lastBook = library.pop();
console.log(lastBook);

var firstBook = library.shift();
console.log(firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
console.log(library);
library.unshift(css);
console.log(library);
library.splice([1]);
console.log(library);

var fullName = 'Brandon Chin';
var firstAndLastName = fullName.split(' ');
console.log('Split Method', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
