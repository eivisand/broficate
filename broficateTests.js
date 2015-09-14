var assert = require('assert'),
    broficate = require('./broficate');
describe('Broficate', function() {
  it('returns \'Sry, bro\' when the value is not present', function () {
    assert.equal('Sry, bro', broficate());
    assert.equal('Sry, bro', broficate([]));
    assert.equal('Sry, bro', broficate({}));
    assert.equal('Sry, bro', broficate(1));
  });

  it('broficates like a boss', function () {
    assert.equal('Brofessional', broficate('Professional'));
    assert.equal('Brobama', broficate('Obama'));
    assert.equal('Broyal', broficate('Royal'));
    assert.equal('Broseidon', broficate('Poseidon'));
    assert.equal('Brozone', broficate('Ozone'));
    assert.equal('Brociopath', broficate('Sociopath'));
    assert.equal('Brostradamus', broficate('Nostradamus'));
    assert.equal('Brothority', broficate('Authority'));
    assert.equal('Brocastrinate', broficate('Procastrinate'));
  });
});
