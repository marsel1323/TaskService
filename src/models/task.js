const { knex: { Model } } = require('../db');

class Task extends Model {
  static get tableName() {
    return 'task';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        // UserId
        name: {
          type: 'string',
          default: 0,
        },
        status: {
          type: 'string',
          default: 0,
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
