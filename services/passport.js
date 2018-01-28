const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = mongoose.model('User');
const helpers = require('./../services/helpers');

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

passport.use(
	new GoogleStrategy({
		clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
		clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
		callbackURL: '/auth/google/callback' 
	}, async (accessToken, refreshToken, profile, cb) => {
		const userFound = await User.findOne({userId: profile.id});
		if (userFound) {
			console.log('USER HAS BEEN FOUND >>>>>\n', userFound);
			return cb(null, userFound);
		} else {
			new User(helpers.createNewUserObject(profile)).save((err, userSaved) => {
				if (err) {
					return cb(err, null);
				}
				if (userSaved) {
					console.log('NEW USER HAS BEEN CREATED >>>>>\n', userSaved);
					return cb(null, userSaved);
				}
			})
		}
	})
)



