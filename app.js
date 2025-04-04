const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const examRoutes = require('./routes/exam-group');

// Use routes
app.use('/exam-group', examRoutes);

<<<<<<< HEAD
// GET /exams endpoint
app.get('/api/exams', (req, res) => {
    res.json(users);
});

// Array to store exams
const exams = [];

// POST /exams endpoint - Adds a new exam
app.post('/api/exams', (req, res) => {
    const newExam = req.body;
    
    // Generate an ID for the new exam
    newExam.id = exams.length + 1;
    
    exams.push(newExam);
    res.json({ message: 'Exam added', exam: newExam });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
=======
// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
>>>>>>> af14bd4c5c19ce6ec0b0457331d8976567146eeb
});