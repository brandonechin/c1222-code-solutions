/* exported pick */
function pick(source, keys) {
  var obj = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      obj[key] = source[key];
    }
  }
  return obj;
}
