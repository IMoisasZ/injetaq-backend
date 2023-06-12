import ImagesModel from '../model/images.model.js'
import { Op } from 'sequelize'

const createImage = async (image) => {
	try {
		const newImage = await ImagesModel.create(image)
		return await getImage(newImage.id)
	} catch (error) {
		throw error
	}
}

const updateImage = async (image) => {
	try {
		await ImagesModel.update(image, {
			where: {
				id: image.id,
			},
		})
		return await getImage(image.id)
	} catch (error) {
		throw error
	}
}

const getImages = async () => {
	try {
		return await ImagesModel.findAll()
	} catch (error) {
		throw error
	}
}

const getImage = async (id) => {
	return await ImagesModel.findByPk(id)
}

const deleteImage = async (id) => {
	try {
		return await ImagesModel.destroy({
			where: {
				id,
			},
		})
	} catch (error) {
		throw error
	}
}

export default {
	createImage,
	updateImage,
	getImages,
	getImage,
	deleteImage,
}
