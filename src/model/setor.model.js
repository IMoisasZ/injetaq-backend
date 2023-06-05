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

Setor.sync({})

export default Setor
