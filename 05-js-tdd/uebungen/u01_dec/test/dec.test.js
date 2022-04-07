const expect = require('must');

// zu testende Einheit
const dec = require('../dec');

describe('dec', () => {
  it('should decrease value by one', () => {
    expect(dec(2)).to.be.equal(1);
  });
  it('should return number', () => {
    expect(dec(2)).to.be.number;
  });
});
