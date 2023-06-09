import ResponsableSectorModel from '../model/responsableSector.model.js'

const createResponsableSector = async (responsable) => {
	try {
		const newResponsable = await ResponsableSectorModel.create(responsable)
		return await getResponsableSector(newResponsable.id)
	} catch (error) {
		throw error
	}
}

const updateResponsableSector = async (responsable) => {
	try {
		await ResponsableSectorModel.update(responsable, {
			where: {
				id: responsable.id,
			},
		})
		return await getResponsableSector(responsable.id)
	} catch (error) {
		throw error
	}
}

const getResponsablesSector = async () => {
	try {
		return await ResponsableSectorModel.findAll()
	} catch (error) {
		throw error
	}
}

const getResponsablesSectorsBySector = async (sector_id) => {
	try {
		return await ResponsableSectorModel.findAll({
			where: {
				sector_id,
			},
		})
	} catch (error) {
		throw error
	}
}

const getResponsableSector = async (id) => {
	try {
		return await ResponsableSectorModel.findByPk(id)
	} catch (error) {
		throw error
	}
}

const disableEnableResponsableSector = async (data) => {
	try {
		await ResponsableSectorModel.update(
			{
				activate: data.activate,
			},
			{
				where: {
					id: data.id,
				},
			}
		)
		return await getResponsableSector(data.id)
	} catch (error) {
		throw error
	}
}

export default {
	createResponsableSector,
	updateResponsableSector,
	getResponsablesSector,
	getResponsablesSectorsBySector,
	getResponsableSector,
	disableEnableResponsableSector,
}
