const expect = require("must");
const isPasswordValid = require("../../isPasswordValid");

describe("isPasswordValid", () => {
  it("should validate passwords", () => {
    let password = "aaaaaaaa"; // Arrange
    expect(isPasswordValid(password)).to.be.falsy(); // Act + Assert
    password += "aa"; // Arrange
    expect(isPasswordValid(password)).to.be.falsy(); // Act + Assert
    password += "7"; // Arrange
    expect(isPasswordValid(password)).to.be.falsy(); // Act + Assert
    password += "!"; // Arrange
    expect(isPasswordValid(password)).to.be.falsy(); // Act + Assert
    password = `${password.substr(0, 5)}!${password.substr(5)}`; // Arrange
    expect(isPasswordValid(password)).to.be.truthy(); // Act + Assert
  });
});
