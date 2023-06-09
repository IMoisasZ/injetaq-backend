import SuppierRepository from '../repositores/supplier.repository.js'
import { upperCase } from '../utils/upperCase.utils.js'

const createSupplier = async (supplier) => {
	try {
		supplier.description = upperCase(supplier.description)
		return await SuppierRepository.createSupplier(supplier)
	} catch (error) {
		throw error
	}
}

const updateSupplier = async (supplier) => {
	try {
		supplier.description = upperCase(supplier.description)
		return await SuppierRepository.updateSupplier(supplier)
	} catch (error) {
		throw error
	}
}

const getSuppliers = async () => {
	try {
		return await SuppierRepository.getSuppliers()
	} catch (error) {
		throw error
	}
}

const getSupplier = async (id) => {
	try {
		return await SuppierRepository.getSupplier(id)
	} catch (error) {
		throw error
	}
}

const disableEnableSupplier = async (data) => {
	try {
		return await SuppierRepository.disableEnableSupplier(data)
	} catch (error) {
		throw error
	}
}

export default {
	createSupplier,
	updateSupplier,
	getSuppliers,
	getSupplier,
	disableEnableSupplier,
}
