const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const voucher_codes = require('voucher-code-generator');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

router.post('/checkEmail', (req, res, next) => {
	User.findOne(req.body, (err, userFound) => {
		if (err) {
			return res.status(400).json({
				success: false,
            	message: 'Oops! Unable to check your email right now, try again later',
            	data: err
            });
		}
		if (!userFound) {
			return res.status(200).json({
				success: false,
            	message: 'Oops! Unable to find your email, check your email',
            	data: err
            });
		}
		if (userFound) {
			// create a new code
			let generatedCode = voucher_codes.generate({
			    length: 10
			});

			console.log('GENERATED CODE: ', generatedCode);
			// add code to user model
			if (generatedCode) {
				User.findByIdAndUpdate(userFound._id, {resetPasswordTokens: [...userFound.resetPasswordTokens, generatedCode[0]]}, {new: true, upsert:true}, (err, userUpdatedWithToken) => {
					if (err) {
						return res.status(400).json({
							success: false,
			            	message: 'Oops! Unable to update your profile with reset password token, try again later',
			            	data: err
			            });
					}
					if (userUpdatedWithToken) {
						console.log('userUpdatedWithToken', userUpdatedWithToken);
						// send email to user with code
						const msg = {
							to: 'npranto@gmail.com',
							from: 'noreply@focus.dev',
							subject: 'Focus: Reset Password Code',
							text: `${userUpdatedWithToken.firstName} ${userUpdatedWithToken.firstName}: Copy the code and paste it to "Verify Code" form`,
							html: `
								<div class="reset-password-template">
									<h1> Hello ${userUpdatedWithToken.firstName}, </h1>
									<p class="flow-text" style="font-size: 14px">
										You are just a few steps away, I promise! Just copy the code you see below and paste it in "Verify Code" form and press "Verify Code."
									</p>
									<h3> Code: ${userUpdatedWithToken.resetPasswordTokens[userUpdatedWithToken.resetPasswordTokens.length-1]} </h3>
									<br />
									<p style="font-size: 14px"> Thank you for using Focus, hope you are enjoying it!</p>
									<p style="font-size: 14px; color: gray">Focus</p>
								<div>
							`,
						};
						sgMail.send(msg).then((json) => {
							if (json) {
								return res.status(200).json({
									success: true,
					            	message: 'Code sent to email!',
					            	data: userUpdatedWithToken
					            });
							} else {
								return res.status(200).json({
									success: false,
					            	message: 'Oops! Unable to email verification code, try again later',
					            	data: err
					            });
							}
						})
					}
				})
			}
			
		}
	})
})

router.put('/:userId/verifyCode', (req, res, next) => {
	User.findById(req.params.userId, (err, userFound) => {
		if (err) {
			return res.status(400).json({
				success: false,
            	message: 'Oops! Unable to find user on database',
            	data: err
            });
		}
		if (userFound) {
			const codeFound = userFound.resetPasswordTokens[userFound.resetPasswordTokens.length-1] === req.body.code;
			if (!codeFound) {
				return res.status(200).json({
					success: false,
	            	message: 'Incorrect token! Check email for most recent code',
	            	data: err
	            });
			}
			if (codeFound) {
				User.findByIdAndUpdate(userFound._id, {resetPasswordTokens: []}, {new: true, upsert:true}, (err, userUpdated) => {
					if (err) {
						return res.status(400).json({
							success: false,
			            	message: 'Oops! Unable to update user reset password token',
			            	data: err
			            });
					}
					if (userUpdated) {
						return res.status(200).json({
							success: true,
			            	message: 'User has been updated with no more reset password tokens',
			            	data: userUpdated
			            });
					}
				})
			}
		}
	})
})

router.put('/:userId/resetPassword', (req, res, next) => {
	if (!req.body || !req.body.password) {
		return res.status(400).json({
			success: false,
        	message: 'Please pass in a new password to update!',
        	data: null
        });
	} 
	bcrypt.hash(req.body.password, saltRounds).then((hash) => {
	    // Store hash in your password DB.
	    req.body.password = hash;
	    User.findByIdAndUpdate(req.params.userId, req.body, { new: true }, (err, userUpdated) => {
			if (err) {
				return res.status(400).json({
					success: false,
	            	message: 'Oops! We are unable to update your password right now, try again later',
	            	data: err
	            });
			}
			if (userUpdated) {
				return res.status(200).json({
					success: true,
		        	message: 'Great, your password has been reset!',
		        	data: userUpdated
				})
			}
		})
	});
})

module.exports = router;