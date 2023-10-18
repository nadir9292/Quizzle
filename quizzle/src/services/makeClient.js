import axios from "axios"
import deepmerge from "deepmerge"

export const makeClient = (options = {}) =>
  axios.create(
    deepmerge(
      {
        baseURL: "api-quizzle.azurewebsites.net",
      },
      options
    )
  )
