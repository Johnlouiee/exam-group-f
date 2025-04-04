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

module.exports = router;