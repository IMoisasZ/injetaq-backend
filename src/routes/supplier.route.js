import { Router } from 'express'
import SupplierController from '../controller/supplier.controller.js'

const route = Router()

route.post('/add', SupplierController.createSupplier)
route.patch('/update', SupplierController.updateSupplier)
route.get('/data', SupplierController.getSuppliers)
route.get('/data/:id', SupplierController.getSupplier)
route.put('/update', SupplierController.disableEnableSupplier)

export default route
