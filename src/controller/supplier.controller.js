import SupplierService from '../service/supplier.service.js'

const createSupplier = async (req, res, next) => {
	try {
		const supplier = req.body
		if (!supplier.description) {
			return res
				.status(404)
				.json({ msg: 'O nome do fornecedor deve ser informado' })
		}
		res.send(await SupplierService.createSupplier(supplier))
		logger.info(`POST - /supplier/add - ${JSON.stringify(supplier)}`)
	} catch (error) {
		next(error)
	}
}

const updateSupplier = async (req, res, next) => {
	try {
		const supplier = req.body
		if (!supplier.description) {
			return res
				.status(404)
				.json({ msg: 'O nome do fornecedor deve ser informado' })
		}
		res.send(await SupplierService.updateSupplier(supplier))
		logger.info(`PATCH - /supplier/update - ${JSON.stringify(supplier)}`)
	} catch (error) {
		next(error)
	}
}

const getSuppliers = async (req, res, next) => {
	try {
		res.send(await SupplierService.getSuppliers())
		logger.info(`GET - /supplier/data - ALL SUPPLIERS`)
	} catch (error) {
		next(error)
	}
}

const getSupplier = async (req, res, next) => {
	try {
		res.send(await SupplierService.getSupplier(req.params.id))
		logger.info(`GET - /supplier/data/${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

const disableEnableSupplier = async (req, res, next) => {
	try {
		const data = req.body
		res.send(await SupplierService.disableEnableSupplier(data))
		logger.info(`PUT - /supplier/update - ${JSON.stringify(data)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createSupplier,
	updateSupplier,
	getSuppliers,
	getSupplier,
	disableEnableSupplier,
}
