const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const db = require("./mockDb");

app.get("/foods", (req, res) => {
  const allFoods = db.getAll();

  if (!allFoods || allFoods.length === 0) {
    return res.status(404).json({ message: "No foods found" });
  }

  res.status(200).json(allFoods);
});

// ⭐ Dynamic Port for Replit / Deployment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
