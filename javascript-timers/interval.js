var counter = 4;
var $countDown = document.querySelector('.countdown-display');
function countDown(event) {
  counter--;
  var msg = counter;
  $countDown.textContent = msg;
  if (counter === 0) {
    clearInterval(stop);
    $countDown.textContent = '~Earth Beeeelooowww Us~';
  }
}
var stop = setInterval(countDown, 1000);
