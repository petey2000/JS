const isPasswordValid = (password) => {
  return (
    passwordHaveMinLength(password) &&
    passwordMustContainADigit(password) &&
    passwordMustContainALetter(password) &&
    passwordMustContainASpecialCharInTheMiddle(password)
  );
};
const passwordHaveMinLength = (password) => password.length >= 10;
const passwordMustContainADigit = (password) => new RegExp(/[0-9]/).test(password);
const passwordMustContainALetter = (password) => new RegExp(/[a-zA-Z]/).test(password);
const passwordMustContainASpecialCharInTheMiddle = (password) =>
  new RegExp(/^.+[!?#].+$/).test(password);

if (isPasswordValid('asd0jdf!sdf09lk') === true) {
  console.log('gutes Passwort');
} else {
  console.log('schlechtes Passwort');
}

module.exports = isPasswordValid;
