const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = mongoose.model('User');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

passport.use(
	new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
	}, (username, password, done) => {
		User.findOne({ email: username }, (err, user) => {
			if (err) { 
				return done(err); 
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username.' });
			}
			if (user.password !== password) {
				return done(null, false, { message: 'Incorrect password.' });
			}
			return done(null, user);
	    });
	})
)

