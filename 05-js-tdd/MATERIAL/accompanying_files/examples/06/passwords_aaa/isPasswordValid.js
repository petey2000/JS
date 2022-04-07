const isPasswordValid = (password) =>
  passwordHaveMinLength(password) &&
  passwordMustContainADigit(password) &&
  passwordMustContainALetter(password) &&
  passwordMustContainASpecialCharInTheMiddle(password);

const passwordHaveMinLength = (password) => password.length >= 10;
const passwordMustContainADigit = (password) => password.match(/[0-9]/);
const passwordMustContainALetter = (password) => password.match(/[a-zA-Z]/);
const passwordMustContainASpecialCharInTheMiddle = (password) =>
  password.match(/^.+[!?#].+$/);

module.exports = isPasswordValid;
