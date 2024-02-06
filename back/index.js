import express from "express"
import cors from "cors"
import { Model } from "objection"
import knex from "knex"
import knexfile from "./knexfile.js"
import allRoutes from "./src/routes/allRoutes.js"

const app = express()
app.use(
  cors({
    origin: "*",
  })
)

const db = knex(knexfile)
Model.knex(db)

const port = 3000

allRoutes({ app, db })

app.listen(port, () => {
  console.log("App listening on port : " + port + " at " + new Date())
})
