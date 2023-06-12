import multer from 'multer'

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'src/uploads')
	},
	filename: function (req, file, cb) {
		cb(null, Date.now().toString() + '_' + file.originalname)
	},
})

const upload = multer({ storage })

export default upload
