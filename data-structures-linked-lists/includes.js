/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported includes */

function includes(list, value) {
  let current = list;
  const newNode = new LinkedList(value);
  while (current) {
    if (current.data === newNode.data) {
      return true;
    }
    current = current.next;
  }
  return false;
}
