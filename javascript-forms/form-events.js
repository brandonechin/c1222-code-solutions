function handleFocus(event) {
  console.log('focus event fired.');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired.');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('Value of name:', event.target.value);
}

var $inputName = document.querySelector('#user-name');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

var $inputEmail = document.querySelector('#user-email');

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

var $text = document.querySelector('textarea');

$text.addEventListener('focus', handleFocus);
$text.addEventListener('blur', handleBlur);
$text.addEventListener('input', handleInput);
