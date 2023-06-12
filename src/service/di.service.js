import DIRepository from '../repositores/di.repository.js'
import ContactClientRepository from '../repositores/contactClient.repository.js'
import ContactSupplierRepository from '../repositores/contactSupplier.repository.js'
import ResponsableSectorRepository from '../repositores/responsableSector.repository.js'

const createDI = async (di) => {
	try {
		const diInicial = 4990
		const max = await DIRepository.maxDi()
		if (!max[0].dataValues.max) {
			di.di = diInicial
		} else {
			di.di = max[0].dataValues.max + 1
		}
		di.description = di.description.toUpperCase()
		di.number = di.number.toUpperCase()
		di.partName = di.partName.toUpperCase()
		di.partNumber = di.partNumber.toUpperCase()
		di.orderNumber = di.orderNumber.toUpperCase()
		di.budget = di.budget.toUpperCase()
		return await DIRepository.createDI(di)
	} catch (error) {
		throw error
	}
}

const updateDI = async (di) => {
	try {
		di.description = di.description.toUpperCase()
		di.number = di.number.toUpperCase()
		di.partName = di.partName.toUpperCase()
		di.partNumber = di.partNumber.toUpperCase()
		di.orderNumber = di.orderNumber.toUpperCase()
		di.budget = di.budget.toUpperCase()
		return await DIRepository.updateDI(di)
	} catch (error) {
		throw error
	}
}

const getDIs = async () => {
	try {
		return await DIRepository.getDIs()
	} catch (error) {
		throw error
	}
}

const getDI = async (id) => {
	try {
		return await DIRepository.getDI(id)
	} catch (error) {
		throw error
	}
}

const statusDI = async (data) => {
	try {
		return await DIRepository.statusDI(data)
	} catch (error) {
		throw error
	}
}

export default {
	createDI,
	updateDI,
	getDIs,
	getDI,
	statusDI,
}
