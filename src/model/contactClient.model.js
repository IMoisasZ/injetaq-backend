import Sequelize from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'

const { INTEGER, STRING, BOOLEAN } = Sequelize
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
			foreignKey: true
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
		activate: {
			type: BOOLEAN,
			defaultValue: true
		},
		main: {
			type: BOOLEAN,
			defaultValue: false
		}
	},
	{ tableName: 'contact_client' }
)

ContactClient.sync()

export default ContactClient

