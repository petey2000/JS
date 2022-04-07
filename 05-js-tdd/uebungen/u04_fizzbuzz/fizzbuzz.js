const { range } = require('lodash');

const fizzbuzz = (n) => {
  const numbers = range(1, n + 1);

  return numbers.map((n) => {
    let res;
    if (n % 3 === 0 && n % 5 === 0) {
      res = 'fizzbuzz';
    } else if (n % 3 === 0) {
      res = 'fizz';
    } else if (n % 5 === 0) {
      res = 'buzz';
    } else {
      res = n;
    }
    return res;
  });
};

console.log(fizzbuzz(100));

module.exports = fizzbuzz;
