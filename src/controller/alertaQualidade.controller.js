import AlertaQualidadeService from '../service/alertaQualidade.service.js'

const createAlert = async (req, res, next) => {
    try {
        const alert = req.body
        if(!alert.di_id){
            return res.status(404).json({msg: 'A DI não foi selecionada!'})
        }
        if(!alert.responsavel_id){
            return res.status(404).json({msg: 'O responsável não foi selecionado!'})
        }
        if(!alert.description){
            return res.status(404).json({msg: 'A descrição não foi informada!'})
        }
        res.send(await AlertaQualidadeService.createAlert(alert))
        loggers.info(`POST - /alerta_qualidade/add - ${JSON.stringify(alert)}`)
    } catch (error) {
        next(error)
    }
}

const updateAlert = async (req, res, next) => {
    try {
        const alert = req.body
        if(!alert.di_id){
            return res.status(404).json({msg: 'A DI não foi selecionada!'})
        }
        if(!alert.responsavel_id){
            return res.status(404).json({msg: 'O responsável não foi selecionado!'})
        }
        if(!alert.description){
            return res.status(404).json({msg: 'A descrição não foi informada!'})
        }
        res.send(await AlertaQualidadeService.updateAltert(alert))
        loggers.info(`PATCH - /alerta_qualidade/add - ${JSON.stringify(alert)}`)
    } catch (error) {
        next(error)
    }
}

const getAlerts = async (req, res, next) => {
    try {
        res.send(await AlertaQualidadeService.getAlerts())
        loggers.info(`GET - /alerta_qualidade/data - ALL ALERTS`)
    } catch (error) {
        next(error)
    }
}

const getAlert = async (req, res, next) => {
    try {
        res.send(await AlertaQualidadeService.getAlert(req.params.id))
        loggers.info(`GET - /alerta_qualidade/data/:${req.params.id}`)
    } catch (error) {
        next(error)
    }
}

const changeStatusAlert = async (req, res, next) => {
    try {
        const data = req.body
        if(!data.status){
            return res.status(404).json({msg: 'Selecione o status!'})
        }
        res.send(await AlertaQualidadeService.changeStatusAlert(data))
        loggers.info(`PUT - /alerta_qualidade/update -${JSON.stringify}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createAlert,
    updateAlert,
    getAlert,
    getAlerts,
    changeStatusAlert
}