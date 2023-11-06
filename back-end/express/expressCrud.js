const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server started at the 3000 port')
});

const students = [];

// GET
app.get('/students', (req, res) => {
  res.status(200).send(students);
});

// GET by ID
app.get('/students/:id', (req, res) => {
  const student = students.find(x => x.id == req.params.id);
  res.status(200).send(student);
});

// POST
app.post('/students', (req, res) => {
  students.push(req.body)
  res.status(200).send("registered student");
});

// PUT
app.put('/students/:id', (req, res) => {
  const student = student.find(x => x.id == req.params.id);
  const studentId = students.indexOf(student);
  students[studentId] = req.body;
  res.status(200).send("student successfully updated");
});

// DELETE
app.delete('/students/:id', (req, res) => {
  const student = student.find(x => x == req.params.id);
  const studentId = students.indexOf(student);
  students.splice(studentId, 1);
  res.status(200).send("student successfully excluded");
});