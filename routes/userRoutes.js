const express = require('express');
const router = express.Router();

// USER ROUTES
router.get('/', (req, res, next) => {
	res.send('Getting user routes!');
});

module.exports = router;