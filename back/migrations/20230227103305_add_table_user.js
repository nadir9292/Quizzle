/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) => {
  return knex.schema.createTable("user", function (table) {
    table.increments("id")
    table.string("name").notNullable()
    table.string("lastname").notNullable()
    table.string("email").notNullable()
    table.string("role")
    table.integer("total_points")
    table.text("passwordHash").notNullable()
    table.text("passwordSalt").notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  return knex.schema.dropTable("user")
}
