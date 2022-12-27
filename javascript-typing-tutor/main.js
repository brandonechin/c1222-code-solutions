var $text = document.querySelectorAll('span');
window.addEventListener('keydown', type);
var i = 0;
function type(event) {
  if (event.key !== $text[i].textContent) {
    $text[i].className = 'incorrect';
    return;
  }
  if ($text[i].textContent === event.key) {
    if (i > 0) {
      $text[i - 1].className = 'correct';
    }
    $text[i].className = 'correct border';
  }
  i++;
}
