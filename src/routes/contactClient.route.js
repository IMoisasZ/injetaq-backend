import {Router} from 'express'
import ContactClientController from '../controller/contactClient.controller.js'

const route = Router()

route.post('/add', ContactClientController.createContactClient)
route.patch('/update', ContactClientController.updateContactClient)
route.get('/data/client/:client_id', ContactClientController.getContactClientsByClient)
route.get('/data', ContactClientController.getContactClients)
route.get('/data/:client_id', ContactClientController.getContactClient)
route.put('/update', ContactClientController.disableEnableContactClient)
route.delete('/delete/:id', ContactClientController.deleteContactClient)
route.put('/main/update', ContactClientController.mainContactClient)

export default route