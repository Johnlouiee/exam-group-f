const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
const examRoutes = require('./routes/exam-group'); // Imports the routes
app.use('/exam-group', examRoutes); // Mounts the routes at /exam-group

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});