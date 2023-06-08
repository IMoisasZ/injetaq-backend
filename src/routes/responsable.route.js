import {Router} from 'express'
import ResponsableController from '../controller/responsable.controller.js'
import responsableController from '../controller/responsable.controller.js'

const route = Router()

route.post('/add', ResponsableController.createResponsable)
route.patch('/update', ResponsableController.updateResponsable)
route.get('/data', ResponsableController.getResponsables)
route.get('/data/:id', responsableController.getResponsable)
route.put('/update', ResponsableController.disableEnableResponsable)

export default route