/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable("stock", (table) => {
    table.increments("id").primary();
    table.integer('product_id').notNullable().references("id").inTable("products")
    table.float('amount').defaultTo(0.0)
    table.timestamps()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable("stock")
};
