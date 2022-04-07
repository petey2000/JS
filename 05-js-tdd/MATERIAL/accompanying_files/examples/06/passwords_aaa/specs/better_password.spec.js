const expect = require("must");
const isPasswordValid = require("../isPasswordValid");

specify(
  "A password with at least 10 Chars, a letter, a digit and a special char (in the middle) should be valid",
  () => {
    expect(isPasswordValid("a234#67890")).to.be.truthy();
  }
);
specify("A password with less than 10 Chars should not be valid", () => {
  expect(isPasswordValid("a234#6789")).to.be.falsy();
});

specify("A password without a special char should not be valid", () => {
  expect(isPasswordValid("a234567890")).to.be.falsy();
});

specify(
  "A password without a special char (only at the end) should not be valid",
  () => {
    expect(isPasswordValid("a23456789#")).to.be.falsy();
  }
);

specify("A password without a letter should not be valid", () => {
  expect(isPasswordValid("1234#67890")).to.be.falsy();
});

specify("A password without a digit should not be valid", () => {
  expect(isPasswordValid("abcd#efghi")).to.be.falsy();
});
