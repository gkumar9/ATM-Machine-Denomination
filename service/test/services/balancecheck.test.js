const assert = require('assert');
const app = require('../../src/app');

describe('\'balancecheck\' service', () => {
  it('registered the service', () => {
    const service = app.service('balancecheck');

    assert.ok(service, 'Registered the service');
  });
});
