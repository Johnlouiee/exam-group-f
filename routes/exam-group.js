const express = require('express');
const router = express.Router();

// GET /exam-group
router.get('/', (req, res) => {
  res.json({ message: "Group F API" });  
});

module.exports = router;