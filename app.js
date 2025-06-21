const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // parse JSON body
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

