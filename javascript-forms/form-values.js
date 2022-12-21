function form(event) {
  event.preventDefault();
  var messageData = {
    name: document.querySelector('#user-name').value,
    email: document.querySelector('#user-email').value,
    message: document.querySelector('textarea').value
  };
  console.log(messageData);
}

var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', form);
