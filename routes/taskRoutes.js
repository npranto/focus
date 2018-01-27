const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Task = mongoose.model('Task');

// TASK ROUTES
router.get('/', (req, res, next) => {
	Task.find({createdBy: req.user._id}, (err, tasksFound) => {
		if (err) {
			return res.status(400).json({
				success: false,
	        	message: 'Oops! We are unable to get all your tasks at the moment.',
	        	data: err
	        })
		}
		if (tasksFound) {
			return res.status(200).json({
				success: true,
	        	message: 'Great, here are all of your tasks',
	        	data: tasksFound
			})
		}
	})
});

router.post('/new', (req, res, next) => {
	new Task(req.body).save((err, taskCreated) => {
		if (err) {
			return res.status(400).json({
				success: false,
	        	message: 'Oops! Unable to create a new task at the moment. Please try again later.',
	        	data: err
	        })
		}	
		if (taskCreated) {
			return res.status(201).json({
				success: true,
	        	message: 'Great, your new task has been created!',
	        	data: taskCreated
			})
		}
	})
})

router.put('/:taskId', (req, res, next) => {
	Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true }, (err, taskUpdated) => {
		if (err) {
			return res.status(400).json({
				success: false,
            	message: 'Oops! We are unable to update your task at the moment. Please try again later.',
            	data: err
            });
		}
		if (taskUpdated) {
			return res.status(200).json({
				success: true,
	        	message: 'Great, your task has been updated!',
	        	data: taskUpdated
			})
		}
	})
})

router.delete('/:taskId', (req, res, next) => {
	Task.findByIdAndRemove(req.params.userId, (err, taskRemoved) => {
		if (err) {
			return res.status(400).json({
				success: false,
            	message: 'Oops! We are unable to delete your task at the moment. Please try again later.',
            	data: err
            });
		}
		if (taskRemoved) {
			return res.status(200).json({
				success: true,
	        	message: 'Great, your task has been deleted!',
	        	data: taskRemoved
			})
		}
	})
})

module.exports = router;