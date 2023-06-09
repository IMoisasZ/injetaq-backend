import { Router } from 'express'
import SetorController from '../controller/sector.controller.js'

const route = Router()

route.post('/add', SetorController.createSetor)
route.patch('/update', SetorController.updateSetor)
route.get('/data', SetorController.getSetores)
route.get('/data/:id', SetorController.getSetor)
route.put('/update', SetorController.disableEnableSetor)

export default route
