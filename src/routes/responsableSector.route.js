import { Router } from 'express'
import ResponsableSectorController from '../controller/responsableSector.controller.js'

const route = Router()

route.post('/add', ResponsableSectorController.createResponsableSector)
route.patch('/update', ResponsableSectorController.updateResponsableSector)
route.get('/data', ResponsableSectorController.getResponsablesSector)
route.get(
	'/sector/data/:sector_id',
	ResponsableSectorController.getResponsablesBySector
)
route.get('/data/:id', ResponsableSectorController.getResponsableSector)
route.put('/update', ResponsableSectorController.disableEnableResponsableSector)

export default route
