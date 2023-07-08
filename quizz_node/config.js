import "dotenv/config"

export default {
  db: {
    client: "postgres",
    connection:
      "postgres://bkevbxyr:oN_u19K6MwTRBXk4ah8vgY2z99rDb0Di@trumpet.db.elephantsql.com/bkevbxyr",
  },
  security: {
    session: {
      secret: "totitoti",
      expiresIn: "2 days",
    },
  },
}
