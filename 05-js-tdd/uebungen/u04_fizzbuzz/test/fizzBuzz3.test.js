const expect = require('must');

const moduloFunktion = require('../fizzBuzz');

let arr = [];

// Array befüllen
for (let index = 1; index <= 100; index++) {
  arr[index] = moduloFunktion(15);
}

describe('moduloFunktion', () => {
  it('should find FizzBuzz', () => {
    expect(moduloFunktion(15)).to.be.equal('FizzBuzz');
  });

  it('should find 16', () => {
    expect(moduloFunktion(16)).to.be.equal(16);
  });
  it('should find 17', () => {
    expect(moduloFunktion(17)).to.be.equal(17);
  });
  it('should find 18', () => {
    expect(moduloFunktion(18)).to.be.equal('Fizz');
  });
  it('should find 19', () => {
    expect(moduloFunktion(19)).to.be.equal(19);
  });
  it('should find Buzz', () => {
    expect(moduloFunktion(20)).to.be.equal('Buzz');
  });
});

// Installation von mocha, siehe package.json
// Starten mit npx mocha oder npx mocha -w
