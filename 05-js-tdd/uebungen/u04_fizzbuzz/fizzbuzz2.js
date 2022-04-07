const divisible = () => {
  let arr = [];

  for (let i = 1; arr.length <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('fizzbuzz');
    } else if (i % 3 === 0) {
      arr.push('fizz');
    } else if (i % 5 === 0) {
      arr.push('buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
};
//console.log(divisible());

module.exports = (fizzbuzz, divisible);
