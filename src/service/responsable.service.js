import ResponsableRepository from '../repositores/responsable.repository.js'
import { upperCase } from '../utils/upperCase.utils.js'

const createResponsable = async (responsable) => {
    try {
        responsable.name = await upperCase(responsable.name)
        return await ResponsableRepository.createResponsable(responsable)
    } catch (error) {
        throw error
    }
}

const updateResponsable = async (responsable) => {
    try {
        responsable.name = await upperCase(responsable.name)
        return await ResponsableRepository.updateResponsable(responsable)
    } catch (error) {
        throw error
    }
}

const getResponsables = async () => {
    try {
        return await ResponsableRepository.getResponsables()
    } catch (error) {
        throw error
    }
}

const getResponsable = async (id) => {
    try {
        return await ResponsableRepository.getResponsable(id)
    } catch (error) {
        throw error
    }
}

const disableEnableResponsable = async (data) => {
    try {
        return await ResponsableRepository.disableEnableResponsable(data)
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