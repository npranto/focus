const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
	title: {
		type: String,
		trim: true,
		minlength: 1,
		maxlength: 200,
		required: true,
	},
	description: {
		type: String,
		trim: true,
		maxlength: 1000
	},
	startTime: {},
	duration: {},
	levelOfImportance: {
		type: String,
		enum: [
			'IU', 
			'IN', 
			'NU', 
			'NN'
		]
	},
	complete: {
		type: Boolean,
		default: false,
		required: true
	},
	created: {
		type: Date,
		default: new Date(),
		required: true
	},
	createdBy: {
		type: Schema.Types.ObjectId, 
		ref: 'User'
	}
})

mongoose.model('Task', taskSchema);