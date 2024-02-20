// Migrations for users table
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.string('password_updated_at').defaultTo(knex.fn.now())
    table.string('image').notNullable().defaultTo('img/users/default.png')
    table.string('role').notNullable().defaultTo('client')
    table.string('status').notNullable().defaultTo('active')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.timestamp('last_login').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
