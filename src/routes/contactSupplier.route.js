import { Router } from 'express'
import ContactSupplierController from '../controller/contactSupplier.controller.js'

const route = Router()

route.post('/add', ContactSupplierController.createContactSupplier)
route.patch('/update', ContactSupplierController.updateContactSupplier)
route.get('/data', ContactSupplierController.getContactsSupplier)
route.get(
	'/supplier/data/:supplier_id',
	ContactSupplierController.getContactsBySupplier
)
route.get('/data/:id', ContactSupplierController.getContactSupplier)
route.put('/update', ContactSupplierController.disableEnableContactSupplier)
route.put('/main/update', ContactSupplierController.mainContactSupplier)

export default route
