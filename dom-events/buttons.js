// var $button = document.querySelector('.click-button');
// $button.addEventListener('click', function handClick(event) {
//   console.log('button clicked');
//   console.log(event);
//   console.log('event target:', $button);
// });

var $mouseOver = document.querySelector('.hover-button');
$mouseOver.addEventListener('mouseover', function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log('event target:', $mouseOver);
});

var $dblClick = document.querySelector('.double-click-button');
$dblClick.addEventListener('dblclick', function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log('event target:', $dblClick);
});

function handClick(event) {
  console.log('button hovered');
  console.log(event);
  console.log('event target;', $button);
}
var $button = document.querySelector('.click-button');
$button.addEventListener('click', handClick);
