
exports.up = (knex) => knex.schema
  .createTable('task', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('status');
  });

exports.down = (knex) => knex.schema
  .dropTable('task');
