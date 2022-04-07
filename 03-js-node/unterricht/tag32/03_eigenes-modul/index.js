const loop = require('./modules/loop/loop.js');
const { times, range } = require('./modules/loop/loop.js');

console.log(loop.times(3, () => 'ho'));
console.log(times(3, () => 'arrr'));
console.log(range(2, 5)); //=> []
