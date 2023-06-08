import ResponsableService from '../service/responsable.service.js'

const createResponsable = async (req, res, next) => {
    try {
        const responsable = req.body
        if(!responsable.setor_id){
            return res.status(404).json({msg: 'O setor deve ser informado!'})
        }
        if(!responsable.name){
            return res.status(404).json({msg: 'O nome do responsável deve ser informado!'})}
        if(!responsable.email){
            return res.status(404).json({msg: 'O email do responsável deve ser informado!'})
        }
        res.send(await ResponsableService.createResponsable(responsable))
        loggers.info(`POST - /responsable/add - ${JSON.stringify(responsable)}`)
    } catch (error) {
        next(error)
    }
}

const updateResponsable = async (req, res, next) => {
    try {
        const responsable = req.body
        if(!responsable.setor_id){
            return res.status(404).json({msg: 'O setor deve ser informado!'})
        }
        if(!responsable.name){
            return res.status(404).json({msg: 'O nome do responsável deve ser informado!'})}
        if(!responsable.email){
            return res.status(404).json({msg: 'O email do responsável deve ser informado!'})
        }
        res.send(await ResponsableService.updateResponsable(responsable))
        loggers.info(`PATCH - /responsable/update - ${JSON.stringify(responsable)}`)
    } catch (error) {
        next(error)
    }
}

const getResponsables = async (req, res, next) => {
    try {
        res.send(await ResponsableService.getResponsables())
        loggers.info(`GET - /responsable/data - ALL RESPONSABLES`)
    } catch (error) {
        next(error)
    }
}

const getResponsable = async (req, res, next) => {
    try {
        res.send(await ResponsableService.getResponsable(req.params.id))
        loggers.info(`GET - /responsable/data/:${req.params.id}`)
    } catch (error) {
        next(error)
    }
}

const disableEnableResponsable = async (req, res, next) => {
    try {
        const data = req.body
        res.send(await ResponsableService.disableEnableResponsable(data))
        loggers.info(`PUT - /responsable/update - ${JSON.stringify(data)}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createResponsable,
    updateResponsable,
    getResponsables,
    getResponsable,
    disableEnableResponsable
}


