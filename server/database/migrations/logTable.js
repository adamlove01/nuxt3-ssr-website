// Migrations for logs table
exports.up = function (knex) {
  return knex.schema.createTable('logs', (table) => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.integer('user_role').notNullable()
    table.string('event').notNullable()
    table.string('url').notNullable()
    table.string('ip').notNullable()
    table.string('details')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
