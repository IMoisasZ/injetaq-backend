import express from 'express'
import cors from 'cors'
import winston from 'winston'

// routes
import ClienteRoute from './src/routes/cliente.route.js'
import SetorRoute from './src/routes/setor.route.js'
import DIRoute from './src/routes/di.route.js'

// app
const app = express()

// json
app.use(express.json())

// cors
app.use(cors())

// routes
app.use('/cliente', ClienteRoute)
app.use('/setor', SetorRoute)
app.use('/di', DIRoute)

// winston(log)
const { combine, timestamp, label, printf } = winston.format
const myformat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level} ${message}`
})
global.logger = winston.createLogger({
	level: 'silly',
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'injetaq' }),
	],
	format: combine(label({ label: 'injetaq' }), timestamp(), myformat),
})

// erro padrão
app.use((err, req, res, next) => {
	global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
	res.status(400).send({ erros: err.message })
})

export default app