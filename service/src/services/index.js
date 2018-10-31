const balancecheck = require('./balancecheck/balancecheck.service.js');
const denomination = require('./denomination/denomination.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(balancecheck);
  app.configure(denomination);
};
