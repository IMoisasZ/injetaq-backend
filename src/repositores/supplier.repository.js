import SupplierModel from '../model/supplier.model.js'

const createSupplier = async (supplier) => {
	try {
		const newSupplier = await SupplierModel.create(supplier)
		return await getSupplier(newSupplier.id)
	} catch (error) {
		throw error
	}
}

const updateSupplier = async (supplier) => {
	try {
		await SupplierModel.update(supplier, {
			where: {
				id: supplier.id,
			},
		})
		return await getSupplier(supplier.id)
	} catch (error) {
		throw error
	}
}

const getSuppliers = async () => {
	try {
		return await SupplierModel.findAll()
	} catch (error) {
		throw error
	}
}

const getSupplier = async (id) => {
	try {
		return await SupplierModel.findByPk(id)
	} catch (error) {
		throw error
	}
}

const disableEnableSupplier = async (data) => {
	try {
		await SupplierModel.update(
			{
				activate: data.activate,
			},
			{
				where: {
					id: data.id,
				},
			}
		)
		return await getSupplier(data.id)
	} catch (error) {
		throw error
	}
}

export default {
	createSupplier,
	updateSupplier,
	getSuppliers,
	getSupplier,
	disableEnableSupplier,
}
