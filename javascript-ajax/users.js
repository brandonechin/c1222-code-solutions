var $user = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (let i = 0; i < this.response.length; i++) {
    var li = document.createElement('li');
    li.textContent = this.response[i].name;
    $user.appendChild(li);
  }
});
xhr.send();
