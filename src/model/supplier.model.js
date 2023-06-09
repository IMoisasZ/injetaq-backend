import Sequelize from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'

const { INTEGER, STRING, BOOLEAN } = Sequelize

const Supplier = DbConnection.define(
	'supplier',
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
			allowNull: false,
		},
		activate: {
			type: BOOLEAN,
			defaultValu: true,
		},
	},
	{ tableName: 'supplier' }
)

Supplier.sync({ alter: true })

export default Supplier
