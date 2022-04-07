const expect = require("must");
const isPasswordValid = require("../../isPasswordValid");

describe("isPasswordValid", () => {
  it("should validate passwords", () => {
    let password = "aaaaaaaa";
    expect(isPasswordValid(password)).to.be.falsy();
    password += "aa";
    expect(isPasswordValid(password)).to.be.falsy();
    password += "7";
    expect(isPasswordValid(password)).to.be.falsy();
    password += "!";
    expect(isPasswordValid(password)).to.be.falsy();
    password = `${password.substr(0, 5)}!${password.substr(5)}`;
    expect(isPasswordValid(password)).to.be.truthy();
  });
});
