const fs = require('fs');
const id = process.argv[3];

module.exports = function remove(json) {
  delete json.notes[id];
  fs.writeFile('data.json', JSON.stringify(json, null, 2), (err) => {
    if (err) throw err;
  });
};
