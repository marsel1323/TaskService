const { knex: { Model } } = require('../db');

class TaskStatus extends Model {
  static get tableName() {
    return 'taskStatus';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        name: {
          type: 'string',
          default: 0,
        },
      },
    };
  }
}

module.exports = TaskStatus;
