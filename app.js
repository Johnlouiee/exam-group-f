const express = require('express');
const app = express();

app.use(express.json());

const examRoutes = require('./routes/examGroup');
app.use('/api', examRoutes);


