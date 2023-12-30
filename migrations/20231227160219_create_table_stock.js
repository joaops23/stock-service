/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable("stock", (table) => {
    table.increments("id").primary();
    table.integer('product_id').nullable().unsigned();
    table.float('amount').defaultTo(0.0);
    table.timestamps();

    //foreign keys
    table.foreign("product_id").references("products.id");
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
