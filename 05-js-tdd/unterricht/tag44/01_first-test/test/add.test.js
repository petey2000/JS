const expect = require('must');

const add = require('../add');

describe('add', () => {
  it('should add to number', () => {
    expect(add(1, 1)).to.be.equal(2);
  });
  it('should add to number if string passed', () => {
    expect(add('1', 1)).to.be.equal(2);
  });
  it('should add number if values (comma separated) are passed', () => {
    expect(add(1, 1, 1, 1)).to.be.equal(4);
  });
  it('should add numbers if array with values are passed', () => {
    expect(add([1, 1, 1, 1])).to.be.equal(4);
  });
});
