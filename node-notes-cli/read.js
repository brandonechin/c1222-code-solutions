module.exports = function read(json) {
  const noteEntries = [];
  for (const key in json.notes) {
    noteEntries.push(`${key}: ${json.notes[key]}`);
  }
  return noteEntries;
};
