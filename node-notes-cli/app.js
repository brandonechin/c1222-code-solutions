const json = require('./data.json');
const read = require('./read');
const create = require('./create');
const update = require('./update');
const remove = require('./delete');

const key = process.argv[2];

if (key === 'read') {
  const noteEntries = read(json);
  for (let i = 0; i < noteEntries.length; i++) {
    console.log(noteEntries[i]);
  }
} else if (key === 'create') {
  create(json);
} else if (key === 'update') {
  update(json);
} else if (key === 'delete') {
  remove(json);
}
