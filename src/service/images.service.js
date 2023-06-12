import ImagesRepository from '../repositores/images.repository.js'
import { upperCase } from '../utils/upperCase.utils.js'

const createImage = async (image) => {
	try {
		return await ImagesRepository.createImage(image)
	} catch (error) {
		throw error
	}
}

const updateImage = async (image) => {
	try {
		image.description = upperCase(image.description)
		return await ImagesRepository.updateImage(image)
	} catch (error) {
		throw error
	}
}

const getImages = async () => {
	try {
		return await ImagesRepository.getImages()
	} catch (error) {
		throw error
	}
}

const deleteImage = async (id) => {
	try {
		return await ImagesRepository.deleteImage(id)
	} catch (error) {
		throw error
	}
}

export default {
	createImage,
	updateImage,
	getImages,
	deleteImage,
}
