import Sequelize from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'

const { INTEGER, STRING, BOOLEAN } = Sequelize

const ResponsableSector = DbConnection.define(
	'responsable_sector',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: {
			type: INTEGER,
			allowNull: false,
		},
		sector_id: {
			type: INTEGER,
			allowNull: false,
		},
		name: {
			type: STRING,
			allowNull: false,
		},
		email: {
			type: STRING,
			allowNull: false,
			unique: true
		},
		activate: {
			type: BOOLEAN,
			defaultValue: true,
		},
		main: {
			type: BOOLEAN,
			defaultValue: false
		}
	},
	{ tableName: 'responsable_sector' }
)

ResponsableSector.sync()

export default ResponsableSector
