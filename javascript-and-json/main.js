var books = [
  {
    isbn: '123',
    title: 'Harry pooter',
    author: 'jk'
  },
  {
    isbn: '123',
    title: 'twilight',
    author: 'edward'
  },
  {
    isbn: '123',
    title: 'cat in hat',
    author: 'the doc'
  }
];
console.log(books);
console.log('type of:', typeof books);
console.log(JSON.stringify(books));
console.log('type of:', typeof JSON.stringify(books));
var student = '{"Number id" : 421, "Name":"Brandon"}';
console.log(student);
console.log('type of:', typeof student);
console.log((JSON.parse(student)));
console.log('typeof:', typeof JSON.parse(student));
