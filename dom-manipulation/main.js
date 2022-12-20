/* the count variable needs to increase by the number of times
the button is clicked. */

var counter = 0;
var $buttonHot = document.querySelector('.hot-button');
var $clickCounter = document.querySelector('.click-count');
$buttonHot.addEventListener('click', handClick);

function handClick(event) {
  counter++;
  var msg = 'Clicks: ' + counter;
  $clickCounter.textContent = msg;
  var temperature = 0;
  if (counter < 4) {
    temperature = 'cold';
  } else if (counter >= 4 && counter < 7) {
    temperature = 'cool';
  } else if (counter >= 7 && counter < 10) {
    temperature = 'tepid';
  } else if (counter >= 10 && counter < 13) {
    temperature = 'warm';
  } else if (counter >= 13 && counter < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $buttonHot.className = 'hot-button ' + temperature;
}
