const expect = require('must');

// zu testende Unit
const fizzbuzz = require('../fizzbuzz');

describe('fizzbuzz', () => {
  it('should return array', () => {
    expect(fizzbuzz(1)).to.be.array;
  });
  it('should return numbers as array', () => {
    expect(fizzbuzz(2).join(',')).to.be.equal('1,2');
  });
  it('should return "fizz" for number in array which is divisible by 3', () => {
    expect(fizzbuzz(3).join(',')).to.be.equal('1,2,fizz');
  });
  it('should return "buzz" for number in array which is divisible by 5', () => {
    expect(fizzbuzz(5).join(',')).to.be.equal('1,2,fizz,4,buzz');
  });
  it('should return "fizzbuzz" for number in array which is divisible by 3 and 5', () => {
    expect(fizzbuzz(15).join(',')).to.be.equal(
      '1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz'
    );
  });
});
