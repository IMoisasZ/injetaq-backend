import { Sequelize } from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'
import ContactClient from './contactClient.model.js'
import DIModel from './di.model.js'

const { INTEGER, STRING, BOOLEAN } = Sequelize

const Client = DbConnection.define(
	'Client',
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
	{ tableName: 'client' }
)

Client.sync()

Client.hasMany(ContactClient, { foreignKey: 'client_id' })
ContactClient.belongsTo(Client, { foreignKey: 'id' })
Client.hasMany(DIModel, { foreignKey: 'client_id' })
DIModel.belongsTo(Client, { foreignKey: 'id' })

export default Client
