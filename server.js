import app from "./app.js"
import dotenv from "dotenv"
import DbConnection from "./src/connection/mysql.connection.js"
dotenv.config()

const { PORT } = process.env

app.listen(PORT, () => console.log(`SERVER RUN AT PORT ${PORT}`))
try {
  await DbConnection.authenticate()
  console.log("Connection has been established successfully.")
} catch (error) {
  console.error("Unable to connect to the database:", error)
}
