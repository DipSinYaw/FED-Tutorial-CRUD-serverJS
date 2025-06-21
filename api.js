const express = require('express');

const app = express();

// app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello from Node.js API!');
});



const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


let goals = [
  { id: 1, title: "Learn Express" },
  { id: 2, title: "Build a CRUD API" },
];

app.get("/api/goals", (req, res) => {
  res.json(goals);
});

app.post("/api/goals", (req, res) => {
  let newGoal = { id: Date.now(), ...req.body };
  goals.push(newGoal);
  res.status(201).json(newGoal);
});

app.put("/api/goals/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let index = goals.findIndex((g) => g.id === id);
  if (index !== -1) {
    goals[index] = { ...goals[index], ...req.body };
    res.json(goals[index]);
  } else {
    res.status(404).json({ error: "Goal not found" });
  }
});

app.delete("/api/goals/:id", (req, res) => {
  let id = parseInt(req.params.id);
  goals = goals.filter((g) => g.id !== id);
  res.json({ message: "Deleted successfully" });
});