const express = require('express');
const router = express.Router();

// REVIEW ROUTES
router.get('/', (req, res, next) => {
	res.send('Getting review routes!');
});

module.exports = router;