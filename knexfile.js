// For migrations and seeds only.
// Database connection db(...) is defined in /server/utils/db.instance.js
require('dotenv').config()

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: process.env.DB_CHARSET,
    },
    migrations: {
      directory: './server/database/migrations',
    },
    seeds: {
      directory: './server/database/seeds',
    },
  },
}
