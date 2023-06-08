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
		user_id: {
			type: INTEGER,
			allowNull: false
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

Cliente.associate = (models) => {
	Cliente.belongsTo(models.di.model)
}

Cliente.sync({})

export default Cliente
