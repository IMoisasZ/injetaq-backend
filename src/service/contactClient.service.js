import ContactClientRepository from '../repositores/contactClient.repository.js'
import {upperCase} from '../utils/upperCase.utils.js'

const createContactClient = async (contact) => {
    try {
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
        return await ContactClientRepository.disableEnableContactClient(data)
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

export default {
    createContactClient,
    updateContactClient,
    getContactClientsByClient,
    getContactClients,
    getContactClient,
    disableEnableContactClient,
    deleteContactClient
}