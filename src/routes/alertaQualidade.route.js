import {Router} from 'express'
import AlertaQualidadeController from '../controller/alertaQualidade.controller.js'

const route = Router()

route.post('/add', AlertaQualidadeController.createAlert)
route.patch('/update', AlertaQualidadeController.updateAlert)
route.get('/data/:id', AlertaQualidadeController.getAlert)
route.get('/data', AlertaQualidadeController.getAlerts)
route.put('/update', AlertaQualidadeController.changeStatusAlert)

export default route