var assert = require('..'),
    nodeAssert = require('assert');

describe('assert', function () {
  it('throws if provided condition is falsey', function () {
    function assertion() {
      assert(2 === 3, '2 is not equal to 3!');
    }
    nodeAssert.throws(assertion);
  });
});

describe('assert.not', function() {
  it('throws if provided condition is truthy', function() {
    function assertion() {
      assert.not(2 === 2, '2 is equal to 2');
    }
    nodeAssert.throws(assertion);
  });
});

