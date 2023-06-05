import Sequelize from "sequelize"
import dotenv from "dotenv"
dotenv.config()

const { DBNAME, DBUSER, DBPASSWORD } = process.env

const DbConnection = new Sequelize(DBNAME, DBUSER, DBPASSWORD, {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: true,
  },
})

export default DbConnection
