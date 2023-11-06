const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const vehicles = [];

//GET
app.get('/vehicles', (req, res) => {
  res.status(200).send(vehicles);
});

// GET by ID
app.get('/vehicles/:id', (req, res) => {
  const vehicle = vehicles.find(x => x.id == req.params.id);
  res.status(200).send(vehicle);
});

// POST
app.post('/vehicles', (req, res) => {
  vehicles.push(req.body);
  res.status(200).send("registered vehicle");
});

// PUT
app.put('/vehicles/:id', (req, res) => {
  const vehicle = vehicles.find(x => x.id == req.params.id);
  const vehicleId = vehicles.indexOf(vehicle);
  vehicles[vehicleId] = req.body;
  res.status(200).send("updated vehicle");
});

// DELETE
app.delete('/vehicles/:id', (req, res) => {
  const vehicle = vehicles.find(x => x.id == req.params.id);
  const vehicleId = vehicles.indexOf(vehicle);
  vehicles.splice(vehicleId, 1);
  res.status(200).send("deleted vehicle");
});