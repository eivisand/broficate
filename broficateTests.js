var assert = require('assert'),
    broficate = require('./broficate');
describe('Broficate', function() {
    it('returns \'Sry, bro\' when the value is not present', function () {
      assert.equal('Sry, bro', broficate());
      assert.equal('Sry, bro', broficate([]));
      assert.equal('Sry, bro', broficate({}));
    });
});
