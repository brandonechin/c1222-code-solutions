/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  } else {
    const firstNode = list.data;
    const secondNode = list.next.data;
    list.data = secondNode;
    list.next.data = firstNode;
    return list;
  }
}
