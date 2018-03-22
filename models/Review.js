const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		maxlength: 75,
	},
	lastName: {
		type: String,
		trim: true,
		maxlength: 75,
	},
	role: {
		type: String,
		trim: true,
		maxlength: 150,
		required: true
	},
	organization: {
		type: String,
		trim: true,
		maxlength: 150,
	},
	rating: {
		type: Number,
		max: 5,
		min: 1
	},
	review: {
		type: String,
		trim: true,
		required: true,
		maxlength: 300
	}
})

mongoose.model('Review', reviewSchema);