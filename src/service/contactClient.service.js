import ContactClientRepository from '../repositores/contactClient.repository.js'
import {upperCase} from '../utils/upperCase.utils.js'

const createContactClient = async (contact) => {
    try {
        await ContactClientRepository.clearMainContact()

        contact.name = upperCase(contact.name)
        
        return await ContactClientRepository.createContactClient(contact)
    } catch (error) {
        throw error
    }
}

const updateContactClient = async (contact) => {
    try {
        contact.name = upperCase(contact.name)
        return await ContactClientRepository.updateContactClient(contact)
    } catch (error) {
        throw error
    }
}

const getContactClientsByClient = async (client_id) => {
    try {
        return await ContactClientRepository.getContactClients(client_id)
    } catch (error) {
        throw error
    }
}

const getContactClients = async () => {
    try {
        return await ContactClientRepository.getContactClients()
    } catch (error) {
        throw error
    }
}

const getContactClient = async (id) => {
    try {
        return await ContactClientRepository.getContactClient(id)
    } catch (error) {
        throw error
    }
}

const disableEnableContactClient = async (data) => {
    try {
        const { main } = await ContactClientRepository.getContactClient(data.id)

        if(!main){
            return await ContactClientRepository.disableEnableContactClient(data)
        }
        
        throw new Error (`Antes de desativar o contato PRINCIPAL, coloque outro como PRINCIPAL!`)
    } catch (error) {
        throw error
    }
}

const deleteContactClient = async (id) => {
    try {
        return await ContactClientRepository.deleteContactClient(id)
    } catch (error) {
        throw error
    }
}

const mainContactClient = async (data) => {
    try {
        const {activate} = await ContactClientRepository.getContactClient(data.id)

        if(!activate && data.main){
            throw new Error(`Não é possivel colocar um contato como PRINCIPAL se ele estiver desativado!`)
        }

        await ContactClientRepository.clearMainContact()

        return await ContactClientRepository.mainContactClient(data)
    } catch (error) {
        throw error
    }
}

export default {
    createContactClient,
    updateContactClient,
    getContactClientsByClient,
    getContactClients,
    getContactClient,
    disableEnableContactClient,
    deleteContactClient,
    mainContactClient
}