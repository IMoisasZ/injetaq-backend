import SectorRepository from '../repositores/sector.repository.js'

const createSector = async (setor) => {
	try {
		setor.description = setor.description.toUpperCase()
		return await SectorRepository.createSector(setor)
	} catch (error) {
		throw error
	}
}

const updateSector = async (setor) => {
	try {
		setor.description = setor.description.toUpperCase()
		return await SectorRepository.updateSector(setor)
	} catch (error) {
		throw error
	}
}

const getSectors = async () => {
	try {
		return await SectorRepository.getSectors()
	} catch (error) {
		throw error
	}
}

const getSector = async (id) => {
	try {
		return await SectorRepository.getSector(id)
	} catch (error) {
		throw error
	}
}

const disableEnableSector = async (data) => {
	try {
		return await SectorRepository.disableEnableSector(data)
	} catch (error) {
		throw error
	}
}

export default {
	createSector,
	updateSector,
	getSectors,
	getSector,
	disableEnableSector,
}
