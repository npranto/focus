const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');
var bcrypt = require('bcrypt');
const saltRounds = 10;

// USER ROUTES
router.post('/', (req, res, next) => {
	User.findOne({ email: req.body.email }, (err, userFound) => {
		if (err) {
			return res.status(400).json({
				success: false,
	        	message: 'Oops! Unable to find your profile at the moment. Please try again later.',
	        	data: err
	        })
		}
		if (userFound) {
			return res.status(200).json({
				success: false,
	        	message: 'Haah! Looks like you already have an account with us.',
	        	data: userFound
			})
		}
		if (!userFound) {
			if (req.body.password) {
				bcrypt.hash(req.body.password, saltRounds)
					.then((hash) => {
					    // Store hash in your password DB.
					    req.body.password = hash;
					    new User(req.body).save((err, userCreated) => {
							if (err) {
								return res.status(400).json({
									success: false,
						        	message: 'Oops! Unable to create a new profile at the moment. Please try again later.',
						        	data: err
						        })
							}	
							if (userCreated) {
								return res.status(201).json({
									success: true,
						        	message: 'Great, your profile has been created!',
						        	data: userCreated
								})
							}
						})
					});
			}
		}
	})
	
})

router.put('/:userId', (req, res, next) => {
	if (req.body.password) {
		bcrypt.hash(req.body.password, saltRounds)
			.then((hash) => {
			    // Store hash in your password DB.
			    req.body.password = hash;
			    User.findByIdAndUpdate(req.params.userId, req.body, { new: true }, (err, userUpdated) => {
					if (err) {
						return res.status(400).json({
							success: false,
			            	message: 'Oops! We are unable to update your profile at the moment. Please try again later.',
			            	data: err
			            });
					}
					if (userUpdated) {
						return res.status(200).json({
							success: true,
				        	message: 'Great, your profile has been updated!',
				        	data: userUpdated
						})
					}
				})
			});
	} else {
		User.findByIdAndUpdate(req.params.userId, req.body, { new: true }, (err, userUpdated) => {
			if (err) {
				return res.status(400).json({
					success: false,
	            	message: 'Oops! We are unable to update your profile at the moment. Please try again later.',
	            	data: err
	            });
			}
			if (userUpdated) {
				return res.status(200).json({
					success: true,
		        	message: 'Great, your profile has been updated!',
		        	data: userUpdated
				})
			}
		})
	}
	
});

router.delete('/:userId', (req, res, next) => {
	User.findByIdAndRemove(req.params.userId, (err, userRemoved) => {
		if (err) {
			return res.status(400).json({
				success: false,
            	message: 'Oops! Unable to delete your account right now, try again later',
            	data: err
            });
		}
		if (userRemoved) {
			return res.status(200).json({
				success: true,
	        	message: 'Great, your account has been deleted!',
	        	data: userRemoved
			})
		}
	})
});

router.post('/:userId/checkPassword', (req, res, next) => {
	console.log(req.body);
	User.findById(req.params.userId, (err, userFound) => {
		if (err) {
			return res.status(400).json({
				success: false,
            	message: 'Oops! Unable to locate you as a valid user',
            	data: err
            });
		}
		if (userFound) {
			bcrypt.compare(req.body.password, userFound.password)
				.then((match) => {
				    if (!match) {
						return res.status(200).json({
							success: false,
			            	message: 'Incorrect password, try again!',
			            	data: null
			            });
				    }
				    return res.status(200).json({
						success: true,
		            	message: 'Passwords match!',
		            	data: null
		            });
				});
		}
	})
})

module.exports = router;