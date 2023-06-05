import ClienteService from '../service/cliente.service.js'

const createCliente = async (req, res, next) => {
	try {
		const cliente = req.body
		if (!cliente.description) {
			return res.status(404).json({ msg: 'Nome do cliente não informado!' })
		}
		res.send(await ClienteService.createCliente(cliente))
		logger.info(`POST - /cliente/add - ${JSON.stringify(cliente)}`)
	} catch (error) {
		next(error)
	}
}

const updateCliente = async (req, res, next) => {
	try {
		const cliente = req.body
		if (!cliente.description) {
			return res.status(404).json({ msg: 'Nome do cliente não informado!' })
		}
		res.send(await ClienteService.updateCliente(cliente))
		logger.info(`PACTH - /cliente/update - ${JSON.stringify(cliente)}`)
	} catch (error) {
		next(error)
	}
}

const getClientes = async (req, res, next) => {
	try {
		res.send(await ClienteService.getClientes())
		logger.info(`GET - /cliente/data - ALL CLIENTS`)
	} catch (error) {
		next(error)
	}
}

const getCliente = async (req, res, next) => {
	try {
		res.send(await ClienteService.getCliente(req.params.id))
		logger.info(`GET - /cliente/data/:${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

const disableEnableCliente = async (req, res, next) => {
	try {
		const data = req.body
		res.send(await ClienteService.disableEnableCliente(data))
		logger.info(`PUT - /cliente/update - ${JSON.stringify(data)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createCliente,
	updateCliente,
	getClientes,
	getCliente,
	disableEnableCliente,
}
