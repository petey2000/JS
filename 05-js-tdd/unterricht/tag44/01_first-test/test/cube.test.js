const expect = require('must');
// https://www.npmjs.com/package/must

// Zu testende Einheit wird eingebunden
const cube = require('../cube');

// Testsuite - Beschreibung, welche Unit getestet wird
describe('cube', () => {
  // Testcase
  it('should return the cubic value', () => {
    // Expectation
    expect(cube(3)).to.be.equal(27);
  });
  // Testcase
  it('should return 0 if no argument passed', () => {
    // Expectation
    expect(cube()).to.be.equal(0);
  });
});
