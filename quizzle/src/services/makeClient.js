import axios from "axios"
import deepmerge from "deepmerge"

export const makeClient = (options = {}) =>
  axios.create(
    deepmerge(
      {
        baseURL: "https://quizzle-api.vercel.app",
      },
      options
    )
  )
