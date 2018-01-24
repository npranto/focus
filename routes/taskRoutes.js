const express = require('express');
const router = express.Router();

// TASK ROUTES
router.get('/', (req, res, next) => {
	res.send('Getting task routes!');
});

module.exports = router;