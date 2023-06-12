import { Router } from 'express'
import SectorController from '../controller/sector.controller.js'

const route = Router()

route.post('/add', SectorController.createSector)
route.patch('/update', SectorController.updateSector)
route.get('/data', SectorController.getSectors)
route.get('/data/:id', SectorController.getSector)
route.put('/update', SectorController.disableEnableSector)

export default route
