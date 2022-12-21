var $container = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');
$container.addEventListener('click', toggle);

function toggle(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }
  var attributeValue = event.target.getAttribute('data-view');
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $view.length; i++) {
      if ($view[i].getAttribute('data-view') === attributeValue) {
        $view[i].className = 'view';
      } else {
        $view[i].className = 'view hidden';
      }
    }
  }
}
