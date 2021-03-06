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
		lowercase: true,
		unique: true,
	    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
		required: true
	},
	password: {
		type: String,
		minlength: 6
	},
	profilePicture: {
		type: String,
		trim: true,
		maxlength: 100
	},
	resetPasswordTokens: {
		type: Array,
		default: [],
		required: true
	}
})

mongoose.model('User', userSchema);