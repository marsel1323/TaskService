const grpc = require('grpc');

const services = require('../services');


const wrapper = async (call, callback, method) => {
  try {
    console.log('Call to:', method.name);
    console.log({ creds: call.request });
    const result = await method(call.request);
    console.log({ result });
    callback(null, { result });
  } catch (error) {
    console.error('Error:');
    console.error(error.message);
    callback({
      code: grpc.status.INVALID_ARGUMENT,
      message: error.message,
    }, { result: null });
  }
};


const create = (creds) => services.create(creds);

const get = (creds) => services.get(creds);

const list = (creds) => services.list(creds);

const update = (creds) => services.update(creds);

const remove = (creds) => services.remove(creds);


module.exports = {
  create: (call, callback) => wrapper(call, callback, create),
  get: (call, callback) => wrapper(call, callback, get),
  list: (call, callback) => wrapper(call, callback, list),
  update: (call, callback) => wrapper(call, callback, update),
  remove: (call, callback) => wrapper(call, callback, remove),
};
