const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');

// USER ROUTES
router.post('/', (req, res, next) => {
	new User(req.body).save((err, userCreated) => {
		if (err) {
			return res.status(400).json({
				success: false,
	        	message: 'Oops! Unable to create a new profile at the moment. Please try again later.',
	        	data: null
	        })
		}	
		if (userCreated) {
			res.status(200).json({
				success: true,
	        	message: 'Great, your profile has been created!',
	        	data: userCreated
			})
		}
	})
})

router.put('/:userId', (req, res, next) => {
	User.findByIdAndUpdate(req.params.userId, req.body, { new: true }, (err, userUpdated) => {
		if (err) {
			return res.status(400).json({
				success: false,
            	message: 'Oops! We are unable to update your profile at the moment. Please try again later.',
            	data: null
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

router.delete('/:userId', (req, res, next) => {
	User.findByIdAndRemove(req.params.userId, (err, userRemoved) => {
		if (err) {
			return res.status(400).json({
				success: false,
            	message: 'Oops! We are unable to delete your account at the moment. Please try again later.',
            	data: null
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

module.exports = router;