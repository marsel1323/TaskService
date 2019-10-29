
exports.up = (knex) => knex.schema
  .hasTable('task')
  .createTable('task', (table) => {
    table.increments('id').primary();
    table.string('name');

    // table.integer('StatusId');
    table.string('status');

    table.integer('CategoryId');
    table.string('count');

    table.integer('UserId');

    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  })

  .hasTable('repeated-task')
  .createTable('repeated-task', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('status'); // Enum: todo, done, archived
    table.string('category'); // Enum: simple task, repeated task ?
    table.string('RepeatedWhenId'); // [{key: 'everyday', value: 24 * 60 * 60 * 1000}, {key: 'everyhour', value: 60*60*1000}]

    table.integer('UserId');

    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  })

  .hasTable('repeatedWhen')
  .createTable('repeatedWhen', (table) => {
    table.increments('id').primary();
    table.string('key');
    table.integer('value'); // 18
  });

exports.down = (knex) => knex.schema
  .dropTable('task');
