var $message = document.querySelector('.message');
function hello(event) {
  $message.textContent = 'Hello There';
}

setTimeout(hello, 2.0 * 1000);
