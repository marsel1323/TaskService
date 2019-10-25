const services = require('../services');

const create = async (call, callback) => {
  try {
    console.log('call to create task', call.request);
    const result = await services.get(call.request);
    callback(null, { success: result });
  } catch (error) {
    console.error('call to create task', error.message, JSON.stringify(error));
    callback(null, { success: false });
  }
};

const get = async (call, callback) => {
  try {
    console.log('call to get task', call.request);
    const result = await services.get(call.request);
    callback(null, { success: result });
  } catch (error) {
    console.error('call to get task', error.message, JSON.stringify(error));
    callback(null, { success: false });
  }
};

const list = async (call, callback) => {
  try {
    console.log('call to list task', call.request);
    const result = await services.list(call.request);
    callback(null, { success: result });
  } catch (error) {
    console.error('call to list task', error.message, JSON.stringify(error));
    callback(null, { success: false });
  }
};

const update = async (call, callback) => {
  try {
    console.log('call to update task', call.request);
    const result = await services.update(call.request);
    callback(null, { success: result });
  } catch (error) {
    console.error('call to update task', error.message, JSON.stringify(error));
    callback(null, { success: false });
  }
};

const remove = async (call, callback) => {
  try {
    console.log('call to remove task', call.request);
    const result = await services.remove(call.request);
    callback(null, { success: result });
  } catch (error) {
    console.error('call to remove task', error.message, JSON.stringify(error));
    callback(null, { success: false });
  }
};

module.exports = {
  create,
  get,
  list,
  update,
  remove,
};
