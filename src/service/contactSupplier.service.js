import ContactSupplierRepository from '../repositores/contactSupplier.repository.js'
import { upperCase } from '../utils/upperCase.utils.js'

const createContactSupplier = async (contact) => {
	try {
		contact.name = upperCase(contact.name)
		return await ContactSupplierRepository.createContactSupplier(contact)
	} catch (error) {
		throw error
	}
}

const updateContactSupplier = async (contact) => {
	try {
		contact.name = upperCase(contact.name)
		return await ContactSupplierRepository.updateContactSupplier(contact)
	} catch (error) {
		throw error
	}
}

const getContactsSupplier = async () => {
	try {
		return await ContactSupplierRepository.getContactsSupplier()
	} catch (error) {
		throw error
	}
}

const getContactsBySupplier = async (supplier_id) => {
	try {
		return await ContactSupplierRepository.getContactsBySupplier(supplier_id)
	} catch (error) {
		throw error
	}
}

const getContactSupplier = async (id) => {
	try {
		return await ContactSupplierRepository.getContactSupplier(id)
	} catch (error) {
		throw error
	}
}

const disableEnableContactSupplier = async (data) => {
	try {
		return await ContactSupplierRepository.disableEnableContactSupplier(data)
	} catch (error) {
		throw error
	}
}

export default {
	createContactSupplier,
	updateContactSupplier,
	getContactsSupplier,
	getContactsBySupplier,
	getContactSupplier,
	disableEnableContactSupplier,
}
