const express = require('express');
const app = express();

let nextId = 1;

const grades = {};

app.use(express.json());
app.get('/api/grades', (req, res) => {
  const gradesObj = [];
  for (const key in grades) {
    gradesObj.push(grades[key]);
  }
  res.json(gradesObj);
});

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).send([grades[nextId]]);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening');
});
