const { times, range } = require('../loop');
const chalk = require('chalk');

const assert = (a, b) => {
  if (a !== b) {
    console.log(chalk.redBright(`✘ test failed: "${a} !== ${b}" `));
    process.exit(1); // node
  } else {
    console.log(chalk.greenBright(`✔ test correct: "${a} === ${b}" `));
  }
};

let i = 5;

console.log(chalk.greenBright('\n========= Test start =========\n'));

console.log(chalk.yellowBright('Times tests:\n'));

assert('', times(0, () => (i += 3)).join());
assert('8', times(1, () => (i += 3)).join());
assert('11,14', times(2, () => (i += 3)).join());
assert('17,20,23', times(3, () => (i += 3)).join());

console.log(chalk.yellowBright('Range tests:\n'));

assert('', range(-1).join());
assert('', range(0).join());
assert('0', range(1).join());
assert('0,1', range(2).join());

assert('', range(-2, -2).join());
assert('-2', range(-2, -1).join());
assert('-2,-1', range(-2, 0).join());
assert('-2,-1,0', range(-2, 1).join());

assert('', range(0, -1).join());
assert('', range(0, 0).join());
assert('0', range(0, 1).join());

assert('0', range(0, 1, 2).join());
assert('0', range(0, 2, 2).join());
assert('0,2', range(0, 3, 2).join());

assert('1', range(1, 0, -2).join());
assert('2', range(2, 0, -2).join());
assert('3,1', range(3, 0, -2).join());

console.log(chalk.greenBright('\n========= Alle Tests durchgeführt =========\n'));
