/* exported updateNext */
/* global LinkedList */ // eslint-disable-line no-unused-vars

function updateNext(list, value) {
  if (list.next === null) {
    return;
  }
  const newList = new LinkedList(value);
  list.next.data = newList.data;
}
