const express = require('express');
const router = express.Router();

// TASK ROUTES
router.get('/', (req, res, next) => {
	res.send('Gets all tasks created by current user');
});

router.put('/:taskId', (req, res, next) => {
	res.send('Updates a particular task in the Task collection');
})

router.delete('/:taskId', (req, res, next) => {
	res.send('Removes a particular task from the Task collection');
})

router.post('/new', (req, res, next) => {
	res.send('Creates a new task in the Task collection');
})

module.exports = router;