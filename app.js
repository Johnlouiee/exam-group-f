const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const examRoutes = require('./routes/exam-group');

// Use routes
app.use('/exam-group', examRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});