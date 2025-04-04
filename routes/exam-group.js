const express = require('express');
const router = express.Router();

// GET /exam-group
router.get('/', (req, res) => {
  res.json({ message: "Group example API" });  // Replace 'example' with your group name
});

module.exports = router;