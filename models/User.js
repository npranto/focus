const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		maxlength: 75
	},
	lastName: {
		type: String,
		trim: true,
		maxlength: 75
	},
	fullName: {
		type: String,
		trim: true,
		maxlength: 200,
		required: true
	},
	email: {
		type: String,
		trim: true,
		maxlength: 150,
		minlength: 5,
		required: true
	},
	password: {
		type: String,
		minlength: 6
	},
	profilePicture: {}
})

mongoose.model('User', userSchema);