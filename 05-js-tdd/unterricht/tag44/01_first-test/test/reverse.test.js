const expect = require('must');

const reverse = require('../reverse');

describe('reverse', () => {
  it('should reverse letters in string', () => {
    expect(reverse('ABC')).to.be.equal('CBA');
  });
});
