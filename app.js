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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
