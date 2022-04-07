const DEFAULT_SEPARATOR = ",";

const stringCalc = (str) =>
  sum(
    str
      .split(new RegExp(`[${separator(str)}\n]`))
      .map(Number)
      .filter((n) => n <= 1000)
  );
const sum = (numbers) => numbers.reduce(add, 0);
const add = (a, b) => a + b;
const separator = (str) =>
  isCustomSeparatorPresent(str)
    ? extractSeparator(str)
    : DEFAULT_SEPARATOR;
const extractSeparator = (str) =>
  str.match(/^\/\/(.*)\n/)[1];
const withoutCustomSeparator = (str) =>
  isCustomSeparatorPresent(str)
    ? str.match(/^\/\/.*?\n(.*)/)[1]
    : str;

const isCustomSeparatorPresent = (str) =>
  str.match(/^\/\/.*?\n/);

module.exports = {
  sum,
  stringCalc,
  extractSeparator,
  withoutCustomSeparator,
};
