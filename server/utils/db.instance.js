import knex from 'knex'

const config = useRuntimeConfig()

// Database connection
export const db = knex({
  client: config.DB_CLIENT,
  connection: {
    port: config.DB_PORT,
    database: config.DB_NAME,
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    charset: config.DB_CHARSET,
  },
})
