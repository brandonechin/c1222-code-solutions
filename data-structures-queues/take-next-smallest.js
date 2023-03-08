/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) return;
  let removed = queue.dequeue();

  if (queue.peek() === undefined) { return removed; }

  if (removed <= queue.peek()) { return removed; }

  while (removed > queue.peek()) {
    queue.enqueue(removed);
    removed = queue.dequeue();

    if (removed <= queue.peek()) { return removed; }
  }
}
