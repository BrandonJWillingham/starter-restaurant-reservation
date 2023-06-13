exports.up = function (knex) {
    return knex.schema.createTable("table", (table) => {
      table.increments("table_id").primary();
      table.string("table_name").notNull();
      table.timestamps(true, true);
      table.integer("capacity").notNull();
      table.integer("reservation_id").references("reservation_id").inTable("reservations");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("table");
  };
  