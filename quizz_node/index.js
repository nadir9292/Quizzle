import express from "express"
import cors from "cors"
import { Model } from "objection"
import knex from "knex"
import knexfile from "./knexfile.js"
import allRoutes from "./src/routes/allRoutes.js"
import swaggerJsDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

const app = express()
app.use(
  cors({
    origin: "*",
  })
)
app.use(express.json())

const db = knex(knexfile)
Model.knex(db)

const port = 3000

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Quizzle api",
      version: "1.0.0",
      description: "API documentation for quizzle api",
    },
  },
  apis: ["./src/routes/*.js"],
}

const swaggerSpec = swaggerJsDoc(options)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

allRoutes({ app, db })

app.listen(port, () => {
  console.log("App listening on port : " + port + " at " + new Date())
})
