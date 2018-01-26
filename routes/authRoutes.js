const express = require('express');
const router = express.Router();

// AUTH ROUTES
router.get('/currentUser', (req, res, next) => {
	res.send('Return the current user who is logged in');
});

router.post('/local', (req, res, next) => {
	res.send('Local sign in a user with username and password');
})

router.post('/local/callback', (req, res, next) => {
	res.send('Return token for local authentication verification');
})

router.post('/google', (req, res, next) => {
	res.send('Sign in an user with Google OAuth');
})

router.post('/google/callback', (req, res, next) => {
	res.send('Return token for Google OAuth verification');
})

module.exports = router;