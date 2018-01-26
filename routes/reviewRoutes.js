const express = require('express');
const router = express.Router();

// REVIEW ROUTES
router.get('/random', (req, res, next) => {
	res.send('Return 5 random reviews from the Review collection');
});

router.post('/new', (req, res, next) => {
	res.send('creates a new review in the Review collection');
})
module.exports = router;