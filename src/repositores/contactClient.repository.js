import ContaClientModel from '../model/contactClient.model.js'
import ClientModel from '../model/cliente.model.js'
import {Op} from 'sequelize'

const createContactClient = async (contact) => {
	try {
		const newContact = await ContaClientModel.create(contact)
		return await getContactClient(newContact.id)
	} catch (error) {
		throw error
	}
}

const updateContactClient = async (contact) => {
	try {
		await ContaClientModel.update(contact, {
			where: {
				id: contact.id,
			},
		})
		return await getContactClient(contact.id)
	} catch (error) {
		throw error
	}
}

const getContactClientsByClient = async (client_id) => {
	try {
		return await ContaClientModel.findAll({
			where: {
				client_id,
			},
		})
	} catch (error) {
		throw error
	}
}

const getContactClients = async () => {
	try {
		return await ContaClientModel.findAll({
			include: { model: ClientModel },
		})
	} catch (error) {
		throw error
	}
}

const getContactClient = async (id) => {
	try {
		return await ContaClientModel.findByPk(id)
	} catch (error) {
		throw error
	}
}

const disableEnableContactClient = async (data) =>{
	try {
		await ContaClientModel.update(
			{
				activate: data.activate
			}, {
			where: {
				id: data.id
			}
		})
		return await getContactClient(data.id)
	} catch (error) {
		throw error
	}
}

const deleteContactClient = async (id) => {
	try {
		await ContaClientModel.destroy({
			where: {
				id,
			},
		})
		return await getContactClient(id)
	} catch (error) {
		throw error
	}
}

const mainContactClient = async (data) => {
	try {
		await ContaClientModel.update({
			main: data.main
		},{
			where: {
				id: data.id
			}
		})
		return await getContactClient(data.id)
	} catch (error) {
		throw error
	}
}

const clearMainContact = async () => {
	try {
		await ContaClientModel.update({
			main: false
		},{
			where: {
				main: {
					[Op.eq] : true
				}
			}
		})
	} catch (error) {
		throw error
	}
}

export default {
	createContactClient,
	updateContactClient,
	getContactClientsByClient,
	getContactClients,
	getContactClient,
	disableEnableContactClient,
	deleteContactClient,
	mainContactClient,
	clearMainContact
}
