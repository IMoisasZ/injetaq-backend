import ResponsableSectorService from '../service/responsableSector.service.js'

const createResponsableSector = async (req, res, next) => {
	try {
		const responsable = req.body
		if (!responsable.sector_id) {
			return res.status(404).json({ msg: 'O setor deve ser informado!' })
		}
		if (!responsable.name) {
			return res
				.status(404)
				.json({ msg: 'O nome do responsável deve ser informado!' })
		}
		if (!responsable.email) {
			return res
				.status(404)
				.json({ msg: 'O email do responsável deve ser informado!' })
		}
		res.send(
			await ResponsableSectorService.createResponsableSector(responsable)
		)
		logger.info(
			`POST - /responsable_sector/add - ${JSON.stringify(responsable)}`
		)
	} catch (error) {
		next(error)
	}
}

const updateResponsableSector = async (req, res, next) => {
	try {
		const responsable = req.body
		if (!responsable.sector_id) {
			return res.status(404).json({ msg: 'O setor deve ser informado!' })
		}
		if (!responsable.name) {
			return res
				.status(404)
				.json({ msg: 'O nome do responsável deve ser informado!' })
		}
		if (!responsable.email) {
			return res
				.status(404)
				.json({ msg: 'O email do responsável deve ser informado!' })
		}
		res.send(
			await ResponsableSectorService.updateResponsableSector(responsable)
		)
		logger.info(
			`PATCH - /responsable_sector/update - ${JSON.stringify(responsable)}`
		)
	} catch (error) {
		next(error)
	}
}

const getResponsablesSector = async (req, res, next) => {
	try {
		res.send(await ResponsableSectorService.getResponsablesSector())
		logger.info(`GET - /responsable_sector/data - ALL RESPONSABLES`)
	} catch (error) {
		next(error)
	}
}

const getResponsablesBySector = async (req, res, next) => {
	try {
		res.send(
			await ResponsableSectorService.getResponsablesBySector(
				req.params.sector_id
			)
		)
		logger.info(
			`GET - /responsable_sector/sector/data/:${req.params.sector_id} - ALL RESPONSABLES BY SETOR`
		)
	} catch (error) {
		next(error)
	}
}

const getResponsableSector = async (req, res, next) => {
	try {
		res.send(await ResponsableSectorService.getResponsableSector(req.params.id))
		logger.info(`GET - /responsable_sector/data/:${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

const disableEnableResponsableSector = async (req, res, next) => {
	try {
		const data = req.body
		const response = await ResponsableSectorService.disableEnableResponsableSector(data)
		res.send(response)
		logger.info(`PUT - /responsable_sector/update - ${JSON.stringify(data)}`)
	} catch (error) {
		next(error)
	}
}

const mainResponsableSector = async (req, res, next) => {
	try {
		const data = req.body
		const response = await ResponsableSectorService.mainResponsableSector(data)
		res.send(response)
		logger.infor(`PUT - /responsable_sector/main/update - ${JSON.stringify(data)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createResponsableSector,
	updateResponsableSector,
	getResponsablesSector,
	getResponsablesBySector,
	getResponsableSector,
	disableEnableResponsableSector,
	mainResponsableSector
}
