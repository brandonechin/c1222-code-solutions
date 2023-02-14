fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
