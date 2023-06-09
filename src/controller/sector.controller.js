import SetorService from '../service/sector.service.js'

const createSetor = async (req, res, next) => {
	try {
		const setor = req.body
		if (!setor.description) {
			return res
				.status(404)
				.json({ msg: 'O nome do setor deve ser informado!' })
		}
		res.send(await SetorService.createSetor(setor))
		loggers.info(`POST - /setor/add - ${JSON.stringify}`)
	} catch (error) {
		next(error)
	}
}

const updateSetor = async (req, res, next) => {
	try {
		const setor = req.body
		if (!setor.description) {
			return res
				.status(404)
				.json({ msg: 'O nome do setor deve ser informado!' })
		}
		res.send(await SetorService.updateSetor(setor))
		loggers.info(`PATCH - /setor/update - ${JSON.stringify}`)
	} catch (error) {
		next(error)
	}
}

const getSetores = async (req, res, next) => {
	try {
		res.send(await SetorService.getSetores())
		loggers.info(`GET - setor/data - ALL SETORES`)
	} catch (error) {
		next(error)
	}
}

const getSetor = async (req, res, next) => {
	try {
		res.send(await SetorService.getSetor(req.params.id))
		loggers.info(`GET - /setor/data/:${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

const disableEnableSetor = async (req, res, next) => {
	try {
		const data = req.body
		res.send(await SetorService.disableEnableSetor(data))
		loggers.info(`PUT - /setor/update - ${JSON.stringify(data)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createSetor,
	updateSetor,
	getSetores,
	getSetor,
	disableEnableSetor,
}
