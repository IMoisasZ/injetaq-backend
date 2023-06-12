import Sequelize from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'

const { INTEGER, STRING, BOOLEAN } = Sequelize

const ContactSupplier = DbConnection.define(
	'contact_supplier',
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
		supplier_id: {
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
		},
		phone: {
			type: STRING,
			allowNull: true,
		},
		activate: {
			type: BOOLEAN,
			defaultValue: true,
		},
	},
	{ tableName: 'contact_supplier' }
)

ContactSupplier.sync()

export default ContactSupplier
