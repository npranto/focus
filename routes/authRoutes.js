const express = require('express');
const passport = require('passport');
const router = express.Router();

// AUTH ROUTES
router.get('/currentUser', (req, res, next) => {
	res.send(req.user);
});

router.post('/local', passport.authenticate('local'), (req, res, next) => {
	res.redirect('/dashboard');
});

router.post('/google', (req, res, next) => {
	res.send('Sign in an user with Google OAuth');
})

router.post('/google/callback', (req, res, next) => {
	res.send('Return token for Google OAuth verification');
})

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;