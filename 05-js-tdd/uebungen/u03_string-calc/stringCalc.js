const stringCalc = (str) => {
  const hasSeparator = str.startsWith('//');
  //const hasSeparator = str.slice(0,3).indexOf('//') !== -1;
  const getSeparator = hasSeparator ? str.charAt(2) : ',';

  const regexStr = new RegExp(`[${getSeparator}|\n]`);

  const numbers = str
    .split(regexStr) // ['1','2', '1001']
    .map(Number) // => [1,2, 1001]
    .filter((n) => n <= 1000); //=> [1,2]

  return numbers.reduce((n1, n2) => {
    return n1 + n2;
  }, 0);
};

module.exports = stringCalc;
