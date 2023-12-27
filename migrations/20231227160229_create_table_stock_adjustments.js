/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable("stock_adjustments", (table) => {
    table.increments('id').primary();
    table.integer('product_id').references('id').inTable("product");
    table.integer("stock_id").references('id').inTable("stock");
    table.float("amount_adjust").notNullable();
    table.enum("adjust_type", ['add', 'sub']);
    table.timestamps()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable("stock_adjustments")
};
