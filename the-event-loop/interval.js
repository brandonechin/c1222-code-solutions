let currentCount = 3;
function countDown() {
  if (currentCount !== 0) {
    console.log(currentCount);
  } else {
    console.log('Blast off!');
    clearInterval(stop);
  }
  currentCount--;
}
const stop = setInterval(countDown, 1000);
