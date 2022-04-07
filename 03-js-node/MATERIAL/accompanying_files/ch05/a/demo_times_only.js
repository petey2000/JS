'use strict'

const times = require('./loop.js').times

console.log(times(5, () => Math.floor(Math.random() * 6) + 1))
