import ClienteRepository from "../repositores/cliente.repository.js"

const createCliente = async (cliente) => {
  try {
    cliente.description = cliente.description.toUpperCase()
    return await ClienteRepository.createCliente(cliente)
  } catch (error) {
    throw error
  }
}

const updateCliente = async (cliente) => {
  try {
    cliente.description = cliente.description.toUpperCase()
    return await ClienteRepository.updateCliente(cliente)
  } catch (error) {
    throw error
  }
}

const getClientes = async () => {
  try {
    return await ClienteRepository.getClientes()
  } catch (error) {
    throw error
  }
}

const getCliente = async (id) => {
  try {
    return await ClienteRepository.getCliente(id)
  } catch (error) {
    throw error
  }
}

const disableEnableCliente = async (data) => {
  try {
    console.debug("service", data)
    return await ClienteRepository.disableEnableCliente(data)
  } catch (error) {
    throw error
  }
}

export default {
  createCliente,
  updateCliente,
  getClientes,
  getCliente,
  disableEnableCliente,
}
