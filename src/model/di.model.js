import Sequelize from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'
import ClientModel from './cliente.model.js'

const { INTEGER, STRING, BOOLEAN, DATE } = Sequelize

const DI = DbConnection.define(
	'di',
	{
		id: {
			type: INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		di: {
			type: INTEGER,
			allowNull: false,
			unique: true,
		},
		op: {
			type: STRING,
			allowNull: true,
		},
		description: {
			type: STRING,
			allowNull: true,
		},
		number: {
			type: STRING,
			allowNull: true,
		},
		partName: {
			type: STRING,
			allowNull: true,
		},
		partNumber: {
			type: STRING,
			allowNull: true,
		},
		client_id: {
			type: INTEGER,
			allowNull: false,
		},
		previusStartData: {
			type: DATE,
			allowNull: true,
		},
		previusEndData: {
			type: DATE,
			allowNull: true,
		},
		orderNumber: {
			type: STRING,
			allowNull: true,
		},
		budget: {
			type: STRING,
			allowNull: true,
		},
		status_di_id: {
			type: INTEGER,
			allowNull: false,
		},
	},
	{ tableName: 'di' }
)

DI.sync({})

DI.belongsTo(ClientModel, { foreignKey: 'client_id' })

export default DI
