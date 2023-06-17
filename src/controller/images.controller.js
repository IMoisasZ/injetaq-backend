import ImagesService from '../service/images.service.js'

const createImage = async (req, res, next) => {
	try {
		// data body
		const dataFront = req.body
		
		// data file
		const file = req.file

		// created file 
		const originalName = file.originalname
		file.url_default = url
		file.name = file.filename
		file.src = file.path
		file.alert_id = dataFront.alert_id
		file.rnc_id = dataFront.rnc_id
		file.description = dataFront.description

		const image = file
		console.log(image);
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