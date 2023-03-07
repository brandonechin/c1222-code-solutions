/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return;
  }
  const thirdNode = list.next.next;
  list.next = thirdNode;
}
