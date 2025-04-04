const express = require('express');
const app = express();

app.use(express.json());

const examRoutes = require('./routes/examGroup');
app.use('/api', examRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
