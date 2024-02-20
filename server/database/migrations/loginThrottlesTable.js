// Login_Throttles

// failures - up to set maximum of (5?)
// status - (adminReset|userReset|adminBan|lockout|null)

// #######

// Lockout       - Too many failed login attempts
// Reset Request - user must reset password - send email request - this can be set in admin panel
// Ban           - user can never log in - this can be set in admin panel

// CHECKING AT LOGIN
// email(exists?) login_throttles->status(!null?) -> return status

// Migrations for login_throttles table
exports.up = function (knex) {
  return knex.schema.createTable('login_throttles', (table) => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.string('email').notNullable()
    table.string('ip').notNullable()
    table.integer('failures').notNullable()
    table.string('status').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('login_throttles')
}
