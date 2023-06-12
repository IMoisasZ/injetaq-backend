import { Router } from 'express'
import ImagesController from '../controller/images.controller.js'
import upload from '../config/multer.config.js'

const route = Router()

route.post('/add', upload.single('file'), ImagesController.createImage)
route.patch('/update', ImagesController.updateImage)
route.get('/data', ImagesController.getImages)
route.delete('/delete/:id', ImagesController.deleteImage)

export default route
