const Knex = require('knex');
const { Model } = require('objection');


const knexConfig = require('../../knexfile');

const knexConnection = Knex(knexConfig.development);

Model.knex(knexConnection);


module.exports = { connection: knexConnection, Model };
