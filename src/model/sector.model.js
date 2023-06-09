import Sequelize from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'
const { INTEGER, STRING, BOOLEAN } = Sequelize

const Setor = DbConnection.define(
	'setor',
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
			unique: true,
		},
		activate: {
			type: BOOLEAN,
			defaultValue: true,
		},
	},
	{ tableName: 'setor' }
)

Setor.sync({ alter: true })

export default Setor
