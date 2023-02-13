const express = require('express');
const path = require('node:path');
const app = express();

const publicDirectory = path.join(__dirname, 'public');

const middleware = express.static(publicDirectory);

app.use(middleware);

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
