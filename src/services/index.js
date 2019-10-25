const { Task } = require('../models');

const get = ({ id }) => Task.query().findById(id);

const create = ({ name }) => Task.query().insert({ name, status: 'new' });

const list = ({ limit, offset }) => Task.query().select('*').offset(offset || 0).limit(limit || 10);

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
