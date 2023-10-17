import "dotenv/config"

export default {
  db: {
    client: "pg",
    connection: {
      host: "postgres",
      user: "postgres",
      password: "postgres",
      database: "quizz",
    },
  },
  security: {
    session: {
      secret: "dockersecret",
      expiresIn: "2 days",
    },
  },
}
