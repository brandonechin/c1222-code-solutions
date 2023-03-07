/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return;
  }
  const removed = stack.pop();
  const peek = stack.peek();
  stack.push(removed);
  return peek;
}
