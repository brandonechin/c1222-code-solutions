/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const removed = stack.pop();
    stack.push(value);
    return stack.push(removed);
  }

}
