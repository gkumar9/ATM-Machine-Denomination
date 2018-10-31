// Initializes the `denomination` service on path `/denomination`
const createService = require('feathers-rethinkdb');
const hooks = require('./denomination.hooks');

module.exports = function (app) {
  const Model = app.get('rethinkdbClient');
  const paginate = app.get('paginate');

  const options = {
    name: 'denomination',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/denomination', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('denomination');

  service.hooks(hooks);
};
