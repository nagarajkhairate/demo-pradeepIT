// test.js
const assert = require('assert');
const http = require('http');

describe('App', () => {
  it('should return a 200 status for root URL', (done) => {
    http.get('http://localhost:3000', (res) => {
      assert.strictEqual(res.statusCode, 200);
      done();
    });
  });
});
