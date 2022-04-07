const expect = require("must");
const { sum, stringCalc } = require("./stringCalc");

describe("sum", () => {
  it("should add up all numbers from an Array", () => {
    expect(sum([1, 2, 3])).to.be.equal(6);
  });
});

describe("stringCalc", () => {
  it("should return 0 for an empty string", () => {
    expect(stringCalc("")).to.be.equal(0);
  });
  it("should return a single number from string", () => {
    expect(stringCalc("1")).to.be.equal(1);
  });
  it("should return the sum of two comma separated numbers", () => {
    expect(stringCalc("1,2,3")).to.be.equal(6);
  });
});
