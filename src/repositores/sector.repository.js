import SetorModel from '../model/sector.model.js'

const createSetor = async (setor) => {
	try {
		const newSetor = await SetorModel.create(setor)
		return await getSetor(newSetor.id)
	} catch (error) {
		throw error
	}
}

const updateSetor = async (setor) => {
	try {
		await SetorModel.update(setor, {
			where: {
				id: setor.id,
			},
		})
		return await getSetor(setor.id)
	} catch (error) {
		throw error
	}
}

const getSetores = async () => {
	try {
		return await SetorModel.findAll()
	} catch (error) {
		throw error
	}
}

const getSetor = async (id) => {
	try {
		return await SetorModel.findByPk(id)
	} catch (error) {
		throw error
	}
}

const disableEnableSetor = async (data) => {
	try {
		await SetorModel.update(
			{
				id: data.id,
				activate: data.activate,
			},
			{
				where: {
					id: data.id,
				},
			}
		)
		return await getSetor(data.id)
	} catch (error) {
		throw error
	}
}

export default {
	createSetor,
	updateSetor,
	getSetores,
	getSetor,
	disableEnableSetor,
}
