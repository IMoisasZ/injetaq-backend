import DIModel from '../model/di.model.js'
import sequelize from 'sequelize'
import ClientModel from '../model/cliente.model.js'

const createDI = async (di) => {
	try {
		const newDI = await DIModel.create(di)
		return await getDI(newDI.id)
	} catch (error) {
		throw error
	}
}

const updateDI = async (di) => {
	try {
		await DIModel.update(di, {
			where: {
				id: di.id,
			},
		})
		return await getDI(di.id)
	} catch (error) {
		throw di
	}
}

const getDIs = async () => {
	try {
		return await DIModel.findAll({ include: { model: ClientModel } })
	} catch (error) {
		throw error
	}
}

const getDI = async (id) => {
	try {
		return await DIModel.findByPk(id)
	} catch (error) {
		throw error
	}
}

const statusDI = async (data) => {
	try {
		await DIModel.update(
			{
				id: data.id,
				status_di_id: data.status_di_id,
			},
			{
				where: {
					id: data.id,
				},
			}
		)
		return await getDI(data.id)
	} catch (error) {
		throw error
	}
}

const maxDi = async () => {
	try {
		return await DIModel.findAll({
			// where: {
			// 	id,
			// },
			attributes: [[sequelize.fn('max', sequelize.col('di')), 'max']],
		})
	} catch (error) {
		throw error
	}
}

export default {
	createDI,
	updateDI,
	getDIs,
	getDI,
	statusDI,
	maxDi,
}
