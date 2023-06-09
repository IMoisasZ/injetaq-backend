import SetorRepository from '../repositores/sector.repository.js'

const createSetor = async (setor) => {
	try {
		setor.description = setor.description.toUpperCase()
		return await SetorRepository.createSetor(setor)
	} catch (error) {
		throw error
	}
}

const updateSetor = async (setor) => {
	try {
		setor.description = setor.description.toUpperCase()
		return await SetorRepository.updateSetor(setor)
	} catch (error) {
		throw error
	}
}

const getSetores = async () => {
	try {
		return await SetorRepository.getSetores()
	} catch (error) {
		throw error
	}
}

const getSetor = async (id) => {
	try {
		return await SetorRepository.getSetor(id)
	} catch (error) {
		throw error
	}
}

const disableEnableSetor = async (data) => {
	try {
		return await SetorRepository.disableEnableSetor(data)
	} catch (error) {
		throw error
	}
}

export default {
	createSetor,
	updateSetor,
	getSetores,
	getSetor,
	disableEnableSetor,
}
