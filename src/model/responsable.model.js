import Sequelize from 'sequelize'
import DbConnection from '../connection/mysql.connection.js'

const {INTEGER, STRING, BOOLEAN} = Sequelize

const Responsable = DbConnection.define('responsable', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: INTEGER,
        allowNull: false
    },
    setor_id: {
        type: INTEGER,
        allowNull: false
    },
    name: {
        type: STRING,
        allowNull: false
    },
    email: {
        type: STRING,
        allowNull: false
    },
    activate: {
        type: BOOLEAN,
        defaultValue: true
    }
}, {tableName: 'responsable'})

Responsable.sync()

export default Responsable