'use strict'

const loop = require('loopmodule')

console.log(loop.times(5, () => Math.floor(Math.random() * 6) + 1))
console.log(loop.range(7))
