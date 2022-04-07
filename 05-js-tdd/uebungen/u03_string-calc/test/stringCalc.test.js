const expect = require('must');
const stringCalc = require('../stringCalc');

describe('stringCalc', () => {
  it('should return 0 for an empty string', () => {
    expect(stringCalc('')).to.be.equal(0);
  });

  it('should return a single number from string', () => {
    expect(stringCalc('1')).to.be.equal(1);
  });
  it('should return the sum of two comma separated numbers', () => {
    expect(stringCalc('1,2')).to.be.equal(3);
  });
  it('should ignore numbers > 1000', () => {
    expect(stringCalc('1,1000,1001,2')).to.be.equal(1003);
  });
  it('should accept comma and \\n as separator', () => {
    expect(stringCalc('1\n2,3')).to.be.equal(6);
  });
  it('should accept selectable separators to change the separator. Separator must begin with two slashes.', () => {
    expect(stringCalc('//;\n1;2')).to.be.equal(3);
    expect(stringCalc('//;\n1;2;3')).to.be.equal(6);
  });
});
