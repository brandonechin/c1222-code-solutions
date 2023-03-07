/* exported getTail */

function getTail(list) {
  let current = list;
  while (current) {
    if (current.next === null) {
      return current.data;
    } else {
      current = current.next;
    }
  }
}
