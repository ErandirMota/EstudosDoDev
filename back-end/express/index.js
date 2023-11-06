const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server started");
});

// GET
app.get('/usuarios', (req, res) => {
  console.log("API get all");
  res.status(200).send("All users");
});

// GET by ID
app.get('/usuarios/:id', (req, res) => {
  console.log("API get by id");
  res.status(200).send(req.params.id);
});

// POST
app.post('/usuarios', (req, res) => {
  console.log("API post user");
  res.status(200).send(req.body);
});

// PUT
app.put('/usuarios/:id', (req, res) => {
  console.log("API put user");
  res.status(200).send(req.params.id);
});

// DELETE
app.delete('/usuarios/:id', (req, res) => {
  console.log("API delete users");
  res.status(200).send(req.params.id);
});