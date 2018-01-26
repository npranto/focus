const express = require('express');
const router = express.Router();

// USER ROUTES
router.put('/:userId', (req, res, next) => {
	res.send('Updates current user\'s profile');
});

router.delete('/:userId', (req, res, next) => {
	res.send('Logs out current user and removes current user\'s from the User collection');
});

module.exports = router;