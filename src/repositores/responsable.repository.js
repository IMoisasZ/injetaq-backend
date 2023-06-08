import ResponsableModel from '../model/responsable.model.js'

const createResponsable = async (responsable) => {
    try {
        const newResponsable = await ResponsableModel.create(responsable)
        return await getResponsable(newResponsable.id)
    } catch (error) {
        throw error
    }
}

const updateResponsable = async (responsable) => {
    try {
        await ResponsableModel.update(responsable, {
            where: {
                id: responsable.id
            }
        })
        getResponsable(responsable.id)
    } catch (error) {
        throw error
    }
}

const getResponsables = async (responsable) => {
    try {
        return await ResponsableModel.findAll()
    } catch (error) {
        throw error
    }
}

const getResponsable = async (id) => {
    try {
        return await ResponsableModel.findByPk(id)
    } catch (error) {
        throw error
    }
}

const disableEnableResponsable = async (data) => {
    try {
        await ResponsableModel.update({
            activate: data.activate
        },{
            where: {
                id: data.id
            }
        })
        return await ResponsableModel.getResponsable(data.id)
    } catch (error) {
        throw error
    }
}

export default {
    createResponsable,
    updateResponsable,
    getResponsables,
    getResponsable,
    disableEnableResponsable
}