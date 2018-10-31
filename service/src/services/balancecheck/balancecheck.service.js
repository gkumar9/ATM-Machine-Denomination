// Initializes the `balancecheck` service on path `/balancecheck`
const createService = require('feathers-rethinkdb');
const hooks = require('./balancecheck.hooks');

module.exports = function (app) {
  const Model = app.get('rethinkdbClient');
  const paginate = app.get('paginate');

  const options = {
    name: 'balancecheck',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/balancecheck', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('balancecheck');

  service.hooks(hooks);
};
