/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let maxValue = stack.peek();
  while (stack.peek() !== undefined) {
    const currentValue = stack.pop();
    if (currentValue > maxValue) {
      maxValue = currentValue;
    }
  }
  return maxValue;
  // let max = -Infinity;
  // while (typeof stack.peek() !== 'undefined') {
  //   max = Math.max(max, stack.pop());
  // }
  // return max;
}
