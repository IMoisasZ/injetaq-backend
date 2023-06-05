import { Router } from 'express'
import DIController from '../controller/di.controller.js'

const route = Router()

route.post('/add', DIController.createDI)
route.patch('/update', DIController.updateDI)
route.get('/data', DIController.getDIs)
route.get('/data/:id', DIController.getDI)
route.put('/update', DIController.statusDI)

export default route
