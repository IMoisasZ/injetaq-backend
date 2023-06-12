import DIService from '../service/di.service.js'

const createDI = async (req, res, next) => {
	try {
		const di = req.body
		if (!di.di) {
			return res.status(404).json({ msg: 'A DI deve ser preenchida!' })
		}
		if (!di.client_id) {
			return res.status(404).json({ msg: 'O cliente deve ser selecionado!' })
		}
		res.send(await DIService.createDI(di))
		logger.info(`POST - /di/add - ${JSON.stringify(di)}`)
	} catch (error) {
		next(error)
	}
}

const updateDI = async (req, res, next) => {
	try {
		const di = req.body
		if (!di.di) {
			return res.status(404).json({ msg: 'A DI deve ser preenchida!' })
		}
		if (!di.client_id) {
			return res.status(404).json({ msg: 'O cliente deve ser selecionado!' })
		}
		res.send(await DIService.updateDI(di))
		logger.info(`PATCH - /di/update - ${JSON.stringify(di)}`)
	} catch (error) {
		next(error)
	}
}

const getDIs = async (req, res, next) => {
	try {
		res.send(await DIService.getDIs())

		logger.info(`GET - /di/data - ALL DI's`)
	} catch (error) {
		next(error)
	}
}

const getDI = async (req, res, next) => {
	try {
		res.send(await DIService.getDI(req.params.id))
		logger.info(`GET - /di/data/:${req.params.id}`)
	} catch (error) {
		next(error)
	}
}

const statusDI = async (req, res, next) => {
	try {
		const data = req.body
		res.send(await DIService.statusDI(data))
		logger.info(`PUT - /di/update - ${JSON.stringify(data)}`)
	} catch (error) {
		next(error)
	}
}

export default {
	createDI,
	updateDI,
	getDIs,
	getDI,
	statusDI,
}
