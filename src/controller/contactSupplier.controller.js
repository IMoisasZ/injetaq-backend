import ContactSupplierService from '../service/contactSupplier.service.js'

const createContactSupplier = async (req, res, next) => {
	try {
		const contact = req.body
		if (!contact.name) {
			return res.status(404).json({ msg: 'O nome deve ser informado!' })
		}
		if (!contact.email) {
			return res.status(404).json({ msg: 'O email deve ser informado!' })
		}
		res.send(await ContactSupplierService.createContactSupplier(contact))
		logger.info(`POST - /contact_supplier/add - ${JSON.stringify(contact)}`)
	} catch (error) {
		next(error)
	}
}

const updateContactSupplier = async (req, res, next) => {
	try {
		const contact = req.body
		if (!contact.name) {
			return res.status(404).json({ msg: 'O nome deve ser informado!' })
		}
		if (!contact.email) {
			return res.status(404).json({ msg: 'O email deve ser informado!' })
		}
		res.send(await ContactSupplierService.updateContactSupplier(contact))
		logger.info(`PACTH - /contact_supplier/update - ${JSON.stringify(contact)}`)
	} catch (error) {
		next(error)
	}
}

const getContactsSupplier = async (req, res, next) => {
	try {
		res.send(await ContactSupplierService.getContactsSupplier())
		logger.info(`GET - /contact_supplier/data - ALL CONTACTS`)
	} catch (error) {
		next(error)
	}
}

const getContactsBySupplier = async (req, res, next) => {
	try {
		res.send(
			await ContactSupplierService.getContactsBySupplier(req.params.supplier_id)
		)
		logger.info(
			`GET - /contact_supplier/supplier/data/:${req.params.supplier_id} - ALL CONTACTS BY SUPPLIER `
		)
	} catch (error) {
		next(error)
	}
}

const getContactSupplier = async (req, res, next) => {
	try {
		res.send(await ContactSupplierService.getContactSupplier(req.params.id))
		logger.info(`GET - /contact_supplier/data/:${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

const disableEnableContactSupplier = async (req, res, next) => {
	try {
		const data = req.body
		const response = await ContactSupplierService.disableEnableContactSupplier(data)
		res.send(response)
		logger.info(`PUT - /contact_supplier/data - ${JSON.stringify(data)}`)
	} catch (error) {
		next(error)
	}
}

const mainContactSupplier = async (req, res, next) => {
	try {
		const data = req.body
		const response = await ContactSupplierService.mainContactSupplier(data)
		res.send(response)
		logger.info(`PUT - /contact_supplier/main/update - ${JSON.stringify(data)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createContactSupplier,
	updateContactSupplier,
	getContactsSupplier,
	getContactsBySupplier,
	getContactSupplier,
	disableEnableContactSupplier,
	mainContactSupplier
}
