const express = require('express');
const app = express();
const json = require('./data.json');
const fs = require('fs');
let nextId = json.nextId;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesObj = [];
  for (const key in json.notes) {
    notesObj.push(json.notes[key]);
  }
  res.json(notesObj);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer.' });
  } else if (json.notes[id]) {
    res.json(json.notes[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.post('/api/notes', (req, res) => {
  const reqBody = req.body;
  if (!reqBody.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    json.notes[nextId] = reqBody;
    json.notes[nextId].id = nextId;
    nextId++;
    json.nextId = nextId;
    fs.writeFile('./data.json', JSON.stringify(json, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(json.notes[nextId - 1]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!json.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete json.notes[id];
    fs.writeFile('./data.json', JSON.stringify(json, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(204).json();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const reqBody = req.body.content;
  const id = Number(req.params.id);
  if (!reqBody || id < 0) {
    res.status(400);
    if (id < 0) {
      res.json({ error: 'id must be a positive integer' });
    } else {
      res.json({ error: 'content is a required field.' });
    }
  } else if (!json.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    json.notes[id].content = reqBody;
    fs.writeFile('./data.json', JSON.stringify(json, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(200).json(json.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening');
});
