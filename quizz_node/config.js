import "dotenv/config"

export default {
  db: {
    client: process.env.DB_CLIENT,
    connection:
      "postgres://cwbkyroo:KvTHRti5eLb_UY0-3TqaSxzq4-cHbmam@mouse.db.elephantsql.com/cwbkyroo",
  },
  security: {
    session: {
      secret: process.env.SECURITY_SECRET,
      expiresIn: "2 days",
    },
  },
}
