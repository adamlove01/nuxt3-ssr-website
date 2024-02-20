// Migrations for login_throttles table

// status - (adminReset|userReset|adminBan|lockout|null)
//    adminReset|userReset - user must reset password - email request sent
//    ban                  - user can never log in - set in admin panel
//    lockout              - Too many (5?) failed login attempts
exports.up = function (knex) {
  return knex.schema.createTable('login_throttles', (table) => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.string('email').notNullable()
    table.string('ip').notNullable()
    table.integer('failures').notNullable()
    table.string('status').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('login_throttles')
}
