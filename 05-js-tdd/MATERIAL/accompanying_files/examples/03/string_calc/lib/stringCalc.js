const stringCalc = (str) => sum(str.split(",").map(Number));
const sum = (numbers) => numbers.reduce(add);
const add = (a, b) => a + b;

module.exports = { sum, stringCalc };
