const { knex: { Model } } = require('../db');

class Task extends Model {
  static get tableName() {
    return 'task';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'UserId'],

      properties: {
        name: {
          type: 'string',
          default: 0,
        },
        status: {
          type: 'string',
          default: 'new',
        },
        UserId: {
          type: 'integer',
        },

        // startDate
        // endDate

        // created_at
        // updated_at
        // finished_at || canceled_at
      },
    };
  }
}

module.exports = Task;
