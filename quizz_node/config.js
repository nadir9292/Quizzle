import "dotenv/config"

export default {
  db: {
    client: "pg",
    connection: {
      host: "quizzledb.postgres.database.azure.com",
      user: "postgres",
      password: "RsdTXRZKADp97GQo",
      database: "quizzledb",
      port: 5432,
      ssl: true,
    },
  },
  security: {
    session: {
      secret: "dockersecret",
      expiresIn: "2 days",
    },
  },
}
