const expect = require("must");
const {
  sum,
  stringCalc,
  extractSeparator,
  withoutCustomSeparator,
} = require("./stringCalc");

describe("sum", () => {
  it("should add up all numbers from an Array", () => {
    expect(sum([1, 2, 3])).to.be.equal(6);
  });
});

describe("extractSeparator", () => {
  it("should return the correct separator", () => {
    expect(extractSeparator("//;\n")).to.be.equal(";");
  });
});

describe("withoutCustomSeparator", () => {
  it("should return without separator", () => {
    expect(withoutCustomSeparator("//;\n1,2")).to.be.equal(
      "1,2"
    );
  });

  it("should return the original if no custom separator is present", () => {
    expect(withoutCustomSeparator("1,2")).to.be.equal(
      "1,2"
    );
  });
});

describe("stringCalc", () => {
  it("should return 0 for an empty string", () => {
    expect(stringCalc("")).to.be.equal(0);
  });
  it("should return a single number from string", () => {
    expect(stringCalc("1")).to.be.equal(1);
  });
  it("should return the sum of comma separated numbers", () => {
    expect(stringCalc("1,2,3")).to.be.equal(6);
  });
  it("should ignore number > 1000", () => {
    expect(stringCalc("1,1001,2")).to.be.equal(3);
  });
  it("should accept line_break as separator", () => {
    expect(stringCalc("1\n2,3")).to.be.equal(6);
  });
  it("should accept custom separator", () => {
    expect(stringCalc("//;\n1;2")).to.be.equal(3);
  });
});
