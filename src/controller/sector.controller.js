import SectorService from '../service/sector.service.js'

const createSector = async (req, res, next) => {
	try {
		const sector = req.body
		console.log(sector)
		if (!sector.description) {
			return res
				.status(404)
				.json({ msg: 'O nome do setor deve ser informado!' })
		}
		res.send(await SectorService.createSector(sector))
		logger.info(`POST - /sector/add - ${JSON.stringify}`)
	} catch (error) {
		next(error)
	}
}

const updateSector = async (req, res, next) => {
	try {
		const sector = req.body
		if (!setor.description) {
			return res
				.status(404)
				.json({ msg: 'O nome do setor deve ser informado!' })
		}
		res.send(await SectorService.updateSector(sector))
		logger.info(`PATCH - /sector/update - ${JSON.stringify}`)
	} catch (error) {
		next(error)
	}
}

const getSectors = async (req, res, next) => {
	try {
		res.send(await SectorService.getSectors())
		logger.info(`GET - setor/data - ALL SETORES`)
	} catch (error) {
		next(error)
	}
}

const getSector = async (req, res, next) => {
	try {
		res.send(await SectorService.getSector(req.params.id))
		logger.info(`GET - /setor/data/:${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

const disableEnableSector = async (req, res, next) => {
	try {
		const data = req.body
		res.send(await SectorService.disableEnableSector(data))
		logger.info(`PUT - /setor/update - ${JSON.stringify(data)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createSector,
	updateSector,
	getSectors,
	getSector,
	disableEnableSector,
}
