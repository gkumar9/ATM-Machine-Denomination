const assert = require('assert');
const app = require('../../src/app');

describe('\'denomination\' service', () => {
  it('registered the service', () => {
    const service = app.service('denomination');

    assert.ok(service, 'Registered the service');
  });
});
