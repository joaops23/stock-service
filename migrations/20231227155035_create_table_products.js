/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('products', (table) => {
    table.increments('id').primary();
    table.string('description').unique().notNullable();
    table.string("observation");
    table.boolean("status").defaultTo(true);
    table.float("price").defaultTo(0.0);
    table.timestamps()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('products')
};
