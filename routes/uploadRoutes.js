const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: './client/public/uploads/',
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	}
})

const upload = multer({
	storage: storage,
	// limits: {
	// 	fileSize: 1000000
	// },
	fileFilter: (req, file, cb) => {
		const allowedFileTypes = /jpeg|jpg|png|gif/;

		console.log(file.originalname, file.mimeType);


		const extentionName = allowedFileTypes.test(path.extname(file.originalname.toLowerCase()))
		const mimeType = allowedFileTypes.test(file.mimetype.split('/').pop())

		console.log(extentionName, mimeType);

		// To accept the file pass `true`, like so:
		if (extentionName && mimeType) {
			cb(null, true)
		} else {
			cb('Images only! (jpeg, jpg, png, or gif)');
		}
	}
}).single('profilePicture');


router.post('/profilePicture', (req, res, next) => {
	upload(req, res, (err) => {
		if (err) {
			return res.json({
				success: false,
				message: err,
				data: null
			})
		}
		if (req.file) {
			return res.json({
				success: true,
				message: 'Successly uploaded!',
				data: req.file
			})
		}
	})
})

module.exports = router;