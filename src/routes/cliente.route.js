import { Router } from "express"
import ClienteController from "../controller/cliente.controller.js"

const route = Router()

route.post("/add", ClienteController.createCliente)
route.patch("/update", ClienteController.updateCliente)
route.get("/data", ClienteController.getClientes)
route.get("/data/:id", ClienteController.getCliente)
route.put("/update", ClienteController.disableEnableCliente)

export default route
