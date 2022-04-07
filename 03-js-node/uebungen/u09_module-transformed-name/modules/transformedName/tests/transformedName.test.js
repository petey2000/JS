const { getTransformedName: tn } = require('../transformedName');
const chalk = require('chalk');

const assert = (a, b) => {
  if (a !== b) {
    console.log(chalk.redBright(`✘ test failed: "${a} !== ${b}" `));
    process.exit(1);
  } else {
    console.log(chalk.greenBright(`✔ test correct: "${a} === ${b}" `));
  }
};

let i = 5;

console.log(chalk.greenBright('\n========= Test start =========\n'));

console.log(chalk.yellowBright('getTransformedName tests:\n'));

assert('Mustermann, M.', tn({ firstName: 'Max', lastName: 'Mustermann' }));
assert('Doe, J.', tn({ firstName: 'John', lastName: 'Doe' }));

console.log(chalk.greenBright('\n========= Alle Tests durchgeführt =========\n'));
