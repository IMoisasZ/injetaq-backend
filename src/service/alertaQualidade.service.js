import AlertaQualidadeRepository from '../repositores/alertaQualidade.repository.js'
import { upperCase } from '../utils/upperCase.utils.js'

const createAlert = async (alert) => {
    try {
        alert.description = upperCase(alert.description)
        alert.status = upperCase(alert.status)
        return await AlertaQualidadeRepository.createAlert(alert)
    } catch (error) {
        throw error
    }
}

const updateAltert = async (alert) => {
    try {
        alert.description = upperCase(alert.description)
        alert.status = upperCase(alert.status)
        return await AlertaQualidadeRepository.updateAlert(alert)
    } catch (error) {
        throw error
    }
}

const getAlerts = async () => {
    try {
        return await AlertaQualidadeRepository.getAlerts()
    } catch (error) {
        throw error
    }
}

const getAlert = async (id) => {
    try {
        return await AlertaQualidadeRepository.getAlert(id)
    } catch (error) {
        throw error
    }
}

const changeStatusAlert = async (data) => {
    try {
        return await AlertaQualidadeRepository.changeStatusAlert(data)
    } catch (error) {
        throw error
    }
}

export default {
    createAlert,
    updateAltert,
    getAlerts,
    getAlert,
    changeStatusAlert
}