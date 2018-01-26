const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
	firstName: {
		type: String,
		lowercase: true,
		trim: true,
		maxlength: 75,
		required: true
	},
	lastName: {
		type: String,
		lowercase: true,
		trim: true,
		maxlength: 75,
		required: true
	},
	role: {
		type: String,
		trim: true,
		maxlength: 150,
		required: true
	},
	company: {
		type: String,
		trim: true,
		maxlength: 150,
	},
	feedback: {
		type: String,
		trim: true,
		required: true,
		maxlength: 300
	}
})

mongoose.model('Review', reviewSchema);