import AlertaQualidadeModel from '../model/alertaQualidade.model.js'
import DIModel from '../model/di.model.js'

const createAlert = async (alert) => {
    try {
        const newAlerta = await AlertaQualidadeModel.create(alerta)
        return await getAlerta(newAlerta.id)
    } catch (error) {
        throw error
    }
}

const updateAlert = async (alert) => {
    try {
        await AlertaQualidadeModel.update(alert, {
            where: {
                id: alert.id
            }
        })
        return await getAlert(alert.id)
    } catch (error) {
        throw error
    }
}

const getAlerts = async () => {
    try {
        return await AlertaQualidadeModel.findAll()
    } catch (error) {
        throw error
    }
}

const getAlert = async (id) => {
    try {
        return await AlertaQualidadeModel.findByPk(id, {
            inlcude: [
                {
                    model: DIModel
                }
            ]
        })
    } catch (error) {
        throw error
    }
}

const changeStatusAlert = async (data) => {
    try {
        await AlertaQualidadeModel.update({
            status: data.status
        }, {
            where: {
                id: data.id
            }
        })
        return await getAlert(data.id)
    } catch (error) {
        throw error
    }
}

export default {
    createAlert,
    updateAlert,
    getAlerts,
    getAlert,
    changeStatusAlert
}