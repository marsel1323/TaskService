const dotenv = require('dotenv-safe');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

dotenv.config();

const grpcService = require('./grpc');

const protoFile = `${__dirname}/protofiles/task.proto`;

const packageDefinition = protoLoader.loadSync(protoFile);
const packageObject = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();

server.addService(packageObject.TaskService.service, grpcService);

server.bind(`0.0.0.0:${process.env.PORT}`, grpc.ServerCredentials.createInsecure());
server.start();
console.log(`Task Service start at ${process.env.PORT}`);

module.exports = server;
