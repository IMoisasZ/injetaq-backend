import Sequelize from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'

const { INTEGER, STRING, BOOLEAN } = Sequelize

const Cliente = DbConnection.define(
	'cliente',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		description: {
			type: STRING,
			allowNul: false,
			unique: true,
		},
		activate: {
			type: BOOLEAN,
			defaultValue: true,
		},
	},
	{ tableName: 'cliente' }
)

Cliente.sync({})

export default Cliente
