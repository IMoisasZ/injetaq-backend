import ContactSupplierModel from '../model/contactSupplier.model.js'
import SupplierModel from '../model/supplier.model.js'

const createContactSupplier = async (contact) => {
	try {
		const newContact = await ContactSupplierModel.create(contact)
		return await getContactSupplier(newContact.id)
	} catch (error) {
		throw error
	}
}

const updateContactSupplier = async (contact) => {
	try {
		await ContactSupplierModel.update(contact, {
			where: {
				id: contact.id,
			},
		})
		return await getContactSupplier(contact.id)
	} catch (error) {
		throw error
	}
}

const getContactsSupplier = async () => {
	try {
		return await ContactSupplierModel.findAll({
			include: [
				{
					model: SupplierModel,
				},
			],
		})
	} catch (error) {
		throw error
	}
}

const getContactsBySupplier = async (supplier_id) => {
	try {
		return await ContactSupplierModel.findAll({
			where: {
				supplier_id,
			},
		})
	} catch (error) {
		throw error
	}
}

const getContactSupplier = async (id) => {
	try {
		return await ContactSupplierModel.findByPk(id)
	} catch (error) {
		throw error
	}
}

const disableEnableContactSupplier = async (data) => {
	try {
		await ContactSupplierModel.update(
			{
				activate: data.activate,
			},
			{
				where: {
					id: data.id,
				},
			}
		)
		return await getContactSupplier(data.id)
	} catch (error) {
		throw error
	}
}

const mainContactSupplier = async (data) => {
	try {
		await ContactSupplierModel.update({
			main: data.main
		},{
			where: {
				id: data.id
			}
		})
	} catch (error) {
		throw error
	}
}

const clearMainContactSupplier = async () => {
	try {
		await ContactSupplierModel.update({
			main: false
		},{
			where:{
				main: true
			}
		})
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
	mainContactSupplier,
	clearMainContactSupplier
}
