var assert = require('assert'),
    broficate = require('./broficate');
describe('Broficate', function() {
  it('returns \'Sry, bro\' when the value is not present', function () {
    assert.equal('Sry, bro', broficate());
    assert.equal('Sry, bro', broficate([]));
    assert.equal('Sry, bro', broficate({}));
  });

  it('replaces \'pro\' with \'bro\'', function () {
    assert.equal('Brofessional', broficate('Professional'));
    assert.equal('bromethius', broficate('promethius'));
  });

  it('appends \'br\' to words starting with \'o\'', function () {
    assert.equal('Brobama', broficate('Obama'));
    assert.equal('bromelette', broficate('omelette'));
  });

  it('Replaces \'ro\' with \'bro\'', function () {
    assert.equal('bro', broficate('ro'));
    assert.equal('Bro', broficate('Ro'));
  });

  it('Replaces \'po\' with \'bro\'', function () {
      assert.equal('broseidon', broficate('poseidon'));
      assert.equal('Broseidon', broficate('Poseidon'));
    });
});
