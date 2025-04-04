const express = require('express');
const app = express();

app.use(express.json());

const examRoutes = require('./routes/examGroup');
app.use('/api', examRoutes);

// Hardcoded list of users
const users = [
    { id: 1, name: 'Alice', role: 'Student' },
    { id: 2, name: 'Bob', role: 'Teacher' },
    { id: 3, name: 'Charlie', role: 'Admin' }
];

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
});