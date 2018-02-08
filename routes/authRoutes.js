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

router.post('/local', (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (err) { 
			res.status(200).json({
				success: false,
				message: 'Unable to log in at the moment, please try again later',
				data: err
			})
		}
		if (!user) { 
			return res.status(200).json({
				success: false,
				message: 'Incorrect username or password',
				data: null
			})
		}
		req.logIn(user, (err) => {
			if (err) { 
				return next(err); 
			}
			return res.status(200).json({
				success: true,
				message: null,
				data: user
			})
		});
	})(req, res, next);
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }) );

router.get('/google/callback', (req, res, next) => {
	passport.authenticate('google', (err, user, info) => {
		if (err) { 
			return res.redirect('/');
		}
		req.logIn(user, (err) => {
			if (err) { 
				return next(err); 
			}
			return res.redirect(`/users/${user._id}/dashboard`);
		});
	})(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

