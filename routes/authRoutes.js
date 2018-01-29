const express = require('express');
const passport = require('passport');
const router = express.Router();

// AUTH ROUTES
router.get('/currentUser', (req, res, next) => {
	if (!req.user) {
	    return res.send(null);
    }
    return res.send(req.user);
});

router.post('/local', passport.authenticate('local', { failureRedirect: '/signup' }), (req, res, next) => {
	res.redirect('/dashboard');
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }) );

router.get('/google/callback', passport.authenticate('google'), (req, res, next) => {
	res.redirect('/dashboard');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;