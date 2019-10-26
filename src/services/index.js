const { Task } = require('../models');


const get = ({ id }) => Task.query().findById(id);

const create = ({ name, status = 'new', UserId }) => Task.query().insert({ name, status, UserId });

const list = ({ limit, offset }) => Task.query().select('*').offset(offset || 0).limit(limit || 10);

const update = ({ id, ...creds }) => Task.query().updateAndFetchById(id, creds);

const remove = ({ id }) => Task.query().deleteById(id);


module.exports = {
  create,
  get,
  list,
  update,
  remove,
};
