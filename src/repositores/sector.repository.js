import SectorModel from '../model/sector.model.js'
import ResponsableSectorModel from '../model/responsableSector.model.js'

const createSector = async (setor) => {
	try {
		const newSetor = await SectorModel.create(setor)
		return await getSector(newSetor.id)
	} catch (error) {
		throw error
	}
}

const updateSector = async (setor) => {
	try {
		await SectorModel.update(setor, {
			where: {
				id: setor.id,
			},
		})
		return await getSector(setor.id)
	} catch (error) {
		throw error
	}
}

const getSectors = async () => {
	try {
		return await SectorModel.findAll({
			include: { model: ResponsableSectorModel },
		})
	} catch (error) {
		throw error
	}
}

const getSector = async (id) => {
	try {
		return await SectorModel.findByPk(id)
	} catch (error) {
		throw error
	}
}

const disableEnableSector = async (data) => {
	try {
		await SectorModel.update(
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
		return await getSector(data.id)
	} catch (error) {
		throw error
	}
}

export default {
	createSector,
	updateSector,
	getSectors,
	getSector,
	disableEnableSector,
}
