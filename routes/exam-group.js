const express = require('express');
const router = express.Router();

// GET /exam-group
router.get('/', (req, res) => {
  res.json({ message: "Group F API" });  
});

router.get('/exams', (req, res) => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" }
  ];
  res.json(users);
});

// POST /exam-group/exams
router.post('/exams', (req, res) => {
  const newExam = {
    id: exams.length + 1, // Simple auto-increment ID
    name: req.body.name,
    email: req.body.email
  };

  // Basic validation
  if (!newExam.name || !newExam.email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  exams.push(newExam);
  res.status(201).json(newExam);
});

router.put('/exams/:id', (req, res) => {
  const examId = parseInt(req.params.id);
  const examIndex = exams.findIndex(exam => exam.id === examId);

  if (examIndex === -1) {
    return res.status(404).json({ error: "Exam not found" });
  }

  const updatedExam = {
    ...exams[examIndex],
    name: req.body.name || exams[examIndex].name,
    email: req.body.email || exams[examIndex].email
  };

  if (!updatedExam.name || !updatedExam.email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  exams[examIndex] = updatedExam;
  res.json(updatedExam);
});
module.exports = router;