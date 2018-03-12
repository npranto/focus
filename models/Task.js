const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
	title: {
		type: String,
		trim: true,
		minlength: 1,
		maxlength: 150,
		required: true,
	},
	description: {
		type: String,
		trim: true,
		maxlength: 500
	},
	startTime: {
		hour: {
			type: Number,
			min: 1,
			max: 12 
		},
		minute: {
			type: Number,
			min: 0,
			max: 59 
		},
		period: {
			type: String,
			enum: [
				'AM', 
				'PM'
			] 
		} 
	},
	duration: {
		hour: {
			type: Number,
			min: 0,
			max: 11,
		},
		minute: {
			type: Number,
			min: 0,
			max: 59,
		}
	},
	levelOfImportance: {
		label: {
			type: String
		},
		value: {
			type: Number,
			min: 1,
			max: 4,
		} 
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