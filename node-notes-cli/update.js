const fs = require('fs');
const id = process.argv[3];
const note = process.argv[4];

module.exports = function update(json) {
  json.notes[id] = note;
  fs.writeFile('data.json', JSON.stringify(json, null, 2), (err) => {
    if (err) throw err;
  });
};
