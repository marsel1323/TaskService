const { Task } = require('../models');

const create = (credentials) => 'create new task';

const get = (id) => `get task by id: ${id}`;

const list = ({ limit, offset }) => 'task list';

const update = (task) => {

};

const remove = (id) => {

};

module.exports = {
  create,
  get,
  list,
  update,
  remove,
};
