const express = require('express');
const router = express.Router();

// AUTH ROUTES
router.get('/', (req, res, next) => {
	res.send('Getting auth routes!');
});

module.exports = router;