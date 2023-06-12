import ClienteModel from '../model/cliente.model.js'
import ContactClient from '../model/contactClient.model.js'

const createCliente = async (cliente) => {
	try {
		const newCliente = await ClienteModel.create(cliente)
		return await getCliente(newCliente.id)
	} catch (error) {
		throw error
	}
}

const updateCliente = async (cliente) => {
	try {
		await ClienteModel.update(cliente, {
			where: {
				id: cliente.id,
			},
		})
		return await getCliente(cliente.id)
	} catch (error) {
		throw error
	}
}

const getClientes = async () => {
	try {
		return await ClienteModel.findAll({
			include: { model: ContactClient },
		})
	} catch (error) {
		throw error
	}
}

const getCliente = async (id) => {
	try {
		return await ClienteModel.findByPk(id)
	} catch (error) {
		throw error
	}
}

const disableEnableCliente = async (data) => {
	await ClienteModel.update(
		{
			activate: data.activate,
		},
		{
			where: {
				id: data.id,
			},
		}
	)
	return await getCliente(data.id)
}

export default {
	createCliente,
	updateCliente,
	getClientes,
	getCliente,
	disableEnableCliente,
}
