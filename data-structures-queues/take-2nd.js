/* exported take2nd */

function take2nd(queue) {
  if (typeof queue.peek() !== 'undefined') {

    const front = queue.dequeue();
    queue.enqueue(front);
    return queue.dequeue();
  }

}
