var $buttonOn = document.querySelector('.button-on');
var $containerOn = document.querySelector('.on');
$buttonOn.addEventListener('click', lightBulb);
var counter = 0;
function lightBulb(event) {
  counter++;
  if (counter % 2 === 0) {
    $buttonOn.className = 'button-on';
    $containerOn.className = 'container on';
  } else {
    $buttonOn.className = 'button-off';
    $containerOn.className = 'container off';
  }
}
