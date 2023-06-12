import Sequelize, { NOW } from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'

const { INTEGER, STRING, DATE } = Sequelize

const today = () => new Date()

const AlertaQualidade = DbConnection.define(
	'alerta_qualidade',
	{
		id: {
			type: INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		user_id: {
			type: INTEGER,
			allowNull: false,
		},
		status: {
			type: STRING,
			allow: false,
		},
		di_id: {
			type: INTEGER,
			allowNull: false,
		},
		responsavel_id: {
			type: INTEGER,
			allowNull: false,
		},
		description: {
			type: STRING,
			allowNull: false,
		},
		date: {
			type: DATE,
			defaultValue: today(),
		},
		due_date: {
			type: DATE,
			allowNull: true,
		},
	},
	{ tableName: 'alerta_qualidade' }
)

AlertaQualidade.sync({})

export default AlertaQualidade
