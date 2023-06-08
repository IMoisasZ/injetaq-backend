import ContactClientService from '../service/contactClient.service.js'

const createContactClient = async (req, res, next) => {
    try {
        const contact = req.body
        if(!contact.name){
            return res.status(404).json({msg: 'O nome deve ser informado!'})
        }
        if(!contact.email){
            return res.status(404).json({msg: 'O email deve ser informado!'})
        }
        res.send(await ContactClientService.createContactClient(contact))
        loggers.info(`POST - /contact_client/add - ${JSON.stringify(contact)}`)
    } catch (error) {
        next(error)
    }
}

const updateContactClient = async (req, res, next) => {
    try {
        const contact = req.body
        if(!contact.name){
            return res.status(404).json({msg: 'O nome deve ser informado!'})
        }
        if(!contact.email){
            return res.status(404).json({msg: 'O email deve ser informado!'})
        }
        res.send(await ContactClientService.updateContactClient(contact))
        loggers.info(`PATCH - /contact_client/update - ${JSON.stringify(contact)}`)
    } catch (error) {
        next(error)
    }
}

const getContactClientsByClient = async (req, res, next) => {
    try {
        res.send(await ContactClientService.getContactClientsBy(req.params.client_id))
        loggers.info(`GET - /contact_client/data/:${req} - ALL CONTACTS BY CLIENT`)
    } catch (error) {
        next(error)
    }
}

const getContactClients = async (req, res, next) => {
    try {
        res.send(await ContactClientService.getContactClients(req.params.client_id))
        loggers.info(`GET - /contact_client/data/:${req} - ALL CONTACTS BY CLIENT`)
    } catch (error) {
        next(error)
    }
}

const getContactClient = async (req, res, next) => {
    try {
        res.send(await ContactClientService.getContactClient(req.params.id))
        loggers.info(`GET - /contact_client/client/data/:${req.params.id}`)
    } catch (error) {
        next(error)
    }
}

const deleteContactClient = async (req, res, next) => {
    try {
        res.send(await ContactClientService.deleteContactClient(req.params.id))
        loggers.info(`DELETE - /contact_client/delete/:${req.params.id}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createContactClient,
    updateContactClient,
    getContactClientsByClient,
    getContactClients,
    getContactClient,
    deleteContactClient
}


