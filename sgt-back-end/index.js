const pg = require('pg');
const express = require('express');
const app = express();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then((result) => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  if (!name) {
    res.status(400).json({ error: 'name is a required field' });
  } else if (!course) {
    res.status(400).json({ error: 'course is a required field' });
  } else if (!score) {
    res.status(400).json({ error: 'score is a required field' });
  } else if (score < 0 || score > 100 || !Number.isInteger(score)) {
    res.status(400).json({ error: 'score must be an integer greater than 0 and less than 100' });
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
  `;
  const params = [name, course, score];
  db.query(sql, params)
    .then((result) => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const gradeId = Number(req.params.gradeId);
  if (!name) {
    res.status(400).json({ error: 'name is a required field' });
  } else if (!course) {
    res.status(400).json({ error: 'course is a required field' });
  } else if (!score) {
    res.status(400).json({ error: 'score is a required field' });
  } else if (score < 0 || score > 100 || !Number.isInteger(score)) {
    res.status(400).json({ error: 'score must be an integer greater than 0 and less than 100' });
  } else if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
  } else {
    const sql = `
   update "grades"
   set "name" = $1,
       "course" = $2,
       "score" = $3
   where "gradeId" = $4
   returning *;
  `;
    const params = [name, course, score, gradeId];
    db.query(sql, params)
      .then((result) => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
        } else {
          res.json(grade);
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
  } else {
    const sql = `
    delete
      from "grades"
     where "gradeId" = $1
     returning *;
    `;
    const params = [gradeId];
    db.query(sql, params)
      .then((result) => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
        } else {
          res.status(204).json(grade);
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening');
});
