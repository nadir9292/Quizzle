import "dotenv/config"

export default {
  db: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
  },
  security: {
    session: {
      secret: process.env.SECURITY_SECRET,
      expiresIn: "2 days",
    },
  },
}
