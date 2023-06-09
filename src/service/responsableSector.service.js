import ResponsableSectorRepository from '../repositores/responsableSector.repository.js'
import { upperCase } from '../utils/upperCase.utils.js'

const createResponsableSector = async (responsable) => {
	try {
		responsable.name = await upperCase(responsable.name)
		return await ResponsableSectorRepository.createResponsableSector(
			responsable
		)
	} catch (error) {
		throw error
	}
}

const updateResponsableSector = async (responsable) => {
	try {
		responsable.name = await upperCase(responsable.name)
		return await ResponsableSectorRepository.updateResponsableSector(
			responsable
		)
	} catch (error) {
		throw error
	}
}

const getResponsablesSector = async () => {
	try {
		return await ResponsableSectorRepository.getResponsablesSector()
	} catch (error) {
		throw error
	}
}

const getResponsablesBySector = async (sector_id) => {
	try {
		return await ResponsableSectorRepository.getResponsablesSectorsBySector(
			sector_id
		)
	} catch (error) {
		throw error
	}
}

const getResponsableSector = async (id) => {
	try {
		return await ResponsableSectorRepository.getResponsableSector(id)
	} catch (error) {
		throw error
	}
}

const disableEnableResponsableSector = async (data) => {
	try {
		return await ResponsableSectorRepository.disableEnableResponsableSector(
			data
		)
	} catch (error) {
		throw error
	}
}

export default {
	createResponsableSector,
	updateResponsableSector,
	getResponsablesSector,
	getResponsablesBySector,
	getResponsableSector,
	disableEnableResponsableSector,
}
