const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Questions API
const questions = [
  {
    id: 1,
    question: "What is 2+2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    id: 2,
    question: "Capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Paris",
  },
  {
    id: 3,
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi",
  },
  {
    id: 4,
    question: "What is 25*5",
    options: ["126", "125", "127", "135"],
    answer: "125",
  },
  // Add more questions
];

app.get("/api/questions", (req, res) => {
  res.json(questions);
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
