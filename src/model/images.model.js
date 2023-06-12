import Sequelize from 'sequelize'
import DbConnetion from '../connection/mysql.connection.js'

const { INTEGER, STRING } = Sequelize

const Images = DbConnetion.define(
	'images',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		alert_number: {
			type: STRING,
			allowNull: true,
		},
		rnc_number: {
			type: STRING,
			allowNull: true,
		},
		description: {
			type: STRING,
			allowNull: false,
		},
		src: {
			type: STRING,
			allowNull: false,
		},
	},
	{ tableName: 'images' }
)

// Images.sync()

export default Images
