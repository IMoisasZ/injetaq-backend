import ImagesService from '../service/images.service.js'

const createImage = async (req, res, next) => {
	try {
		const file = req.file
		const originalName = file.originalname
		console.log(originalName)

		const image = { name: file.filename.toString(), src: file.path }

		res.send(await ImagesService.createImage(image))
		logger.info(`POST - /images/add - ${JSON.stringify(image)}`)
	} catch (error) {
		next(error)
	}
}

const updateImage = async (req, res, next) => {
	try {
		const image = req.body
		res.send(await ImagesService.updateImage(image))
		logger.info(`PATCH - /image/update - ${JSON.stringify(image)}`)
	} catch (error) {
		next(error)
	}
}

const getImages = async (req, res, next) => {
	try {
		res.send(await ImagesService.getImages())
		logger.info(`GET - /image/data - ${JSON.stringify(req.body)}`)
	} catch (error) {
		next(error)
	}
}

const deleteImage = async (req, res, next) => {
	try {
		res.send(await ImagesService.deleteImage(req.params.id))
		logger.info(`DELETE - /image/delete/${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createImage,
	updateImage,
	getImages,
	deleteImage,
}
