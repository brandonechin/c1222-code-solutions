/* exported getTail */

function getTail(list) {
  let current = list;
  while (current) {
    if (!current.next) {
      return current.data;
    } else {
      current = current.next;
    }
  }
}
