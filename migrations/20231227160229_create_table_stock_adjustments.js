/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable("stock_adjustments", (table) => {
    table.increments('id').primary();
    table.integer('product_id').nullable().unsigned();
    table.integer("stock_id").nullable().unsigned();
    table.float("amount_adjust").notNullable();
    table.enum("adjust_type", ['add', 'sub']);
    table.timestamps()

    //foreign keys
    table.foreign('product_id').references("products.id");
    table.foreign("stock_id").references('stock.id');
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
