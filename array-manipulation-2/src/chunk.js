/* exported chunk */
function chunk(array, size) {
  var chunks = [];
  var i = 0;

  while (i < array.length) {
    chunks.push(array.slice(i, i += size));
  }

  return chunks;
}
