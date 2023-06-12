import Sequelize from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'
import ContactSupplierModel from '../model/contactSupplier.model.js'

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

Supplier.sync()

Supplier.hasMany(ContactSupplierModel, { foreignKey: 'supplier_id' })
ContactSupplierModel.belongsTo(Supplier, { foreignKey: 'id' })

export default Supplier
