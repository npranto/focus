const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Review = mongoose.model('Review');
const User = mongoose.model('User');


const generateRandomIndexes = (numberOfRandomIndexes, totalIndexes) => {
	let randomIndexes = [];
	while(randomIndexes.length < 5) {
		let newRandomIndex = Math.floor(Math.random() * (totalIndexes));
		if (randomIndexes.indexOf(newRandomIndex) === -1) {
			randomIndexes.push(newRandomIndex);
		} 
	}
	return randomIndexes;
}

// REVIEW ROUTES
router.get('/random', (req, res, next) => {
	Review.find({}, (err, allReviews) => {
		if (err) {
			return res.status(400).json({
				success: false,
				message: 'Oops! We are unable to grab all the reviews at the moment.',
				data: null
			})
		}
		if (allReviews) {
			let reviews;
			if (allReviews.length <= 5) {
				reviews = allReviews;
			} 
			if (allReviews.length > 5) {
				let listOfFiveRandomIndexes = generateRandomIndexes(5, allReviews.length);
				reviews = listOfFiveRandomIndexes.map(index => allReviews[index]);
			}
			return res.status(200).json({
	        	success: true,
				message: 'Great, here are 5 random reviews!',
				data: reviews
        	})
		}
        
    });
});

router.post('/:userId/new', (req, res, next) => {
	User.findById(req.params.userId, (err, userFound) => {
		if (err) {
			return res.status(400).json({
				success: false,
				message: 'Hah! Looks like you do not have an account with Focus',
				data: null
			})
		} 
		if (userFound) {
			new Review(req.body).save((err, reviewCreated) => {
				if (err) {
					return res.status(400).json({
						success: false,
						message: 'Oops! We are unable to create a new review at the moment. Please try again later.',
						data: null
					})
				}
				if (reviewCreated) {
					res.status(201).json({
						success: true,
						message: 'Awesome! Your review has been submitted!',
						data: reviewCreated
					})
				}
			})
		}
	})
	
})

module.exports = router;