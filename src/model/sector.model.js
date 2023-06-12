import Sequelize from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'
import ResponsableSectorModel from './responsableSector.model.js'

const { INTEGER, STRING, BOOLEAN } = Sequelize

const Sector = DbConnection.define(
	'sector',
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
	{ tableName: 'sector' }
)

Sector.sync()

Sector.hasMany(ResponsableSectorModel, { foreignKey: 'sector_id' })
ResponsableSectorModel.belongsTo(Sector, { foreignKey: 'sector_id' })

export default Sector
