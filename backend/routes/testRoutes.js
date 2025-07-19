// backend/routes/testRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Backend is running successfully!' });
});

module.exports = router;