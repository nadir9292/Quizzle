import "dotenv/config"

export default {
  db: {
    client: process.env.DB_CLIENT,
    connection:
      "postgres://ksenktbs:FWoLnRiBFjWBrpH1ZdICZbV2fNl9iX-R@balarama.db.elephantsql.com/ksenktbs",
  },
  security: {
    session: {
      secret: process.env.SECURITY_SECRET,
      expiresIn: "2 days",
    },
  },
}