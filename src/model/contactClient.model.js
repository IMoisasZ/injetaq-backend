import Sequelize from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'

const { INTEGER, STRING } = Sequelize
const ContactClient = DbConnection.define(
	'ContactClient',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		client_id: {
			type: INTEGER,
			allowNull: false,
		},
		name: {
			type: STRING,
			allowNull: true,
		},
		email: {
			type: STRING,
			allowNull: true,
			unique: true,
		},
		phone: {
			type: STRING,
			allowNull: true,
		},
	},
	{ tableName: 'contact_client' }
)

ContactClient.sync()

export default ContactClient
