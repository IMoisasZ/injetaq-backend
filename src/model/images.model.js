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
		alert_id: {
			type: INTEGER,
			allowNull: true
		},
		rnc_id: {
			type: INTEGER,
			allowNull: true
		},
		name: { //original name
			type: STRING,
			allowNull: false
		},
		src: { //filename
			type: STRING,
			allowNull: false
		},
		description: {
			type: STRING,
			allowNull: false,
		},
		url_default: {
			type: STRING,
			allowNull: false
		}
	},
	{ tableName: 'images' }
)

Images.sync()

export default Images
