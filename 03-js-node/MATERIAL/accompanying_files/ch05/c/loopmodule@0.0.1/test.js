'use strict'

const loop = require('./loop.js')

const assert = (a, b) => {
    if (a !== b) {
        console.log(`test failed: "${a}" `)
        process.exit(1)
    }
}

let i = 5
assert('', loop.times(0, () => (i += 3)).join())
assert('8', loop.times(1, () => (i += 3)).join())
assert('11,14', loop.times(2, () => (i += 3)).join())
assert('17,20,23', loop.times(3, () => (i += 3)).join())

assert('', loop.range(-1).join())
assert('', loop.range(0).join())
assert('0', loop.range(1).join())
assert('0,1', loop.range(2).join())

assert('', loop.range(-2, -2).join())
assert('-2', loop.range(-2, -1).join())
assert('-2,-1', loop.range(-2, 0).join())
assert('-2,-1,0', loop.range(-2, 1).join())

assert('', loop.range(0, -1).join())
assert('', loop.range(0, 0).join())
assert('0', loop.range(0, 1).join())

assert('0', loop.range(0, 1, 2).join())
assert('0', loop.range(0, 2, 2).join())
assert('0,2', loop.range(0, 3, 2).join())

assert('1', loop.range(1, 0, -2).join())
assert('2', loop.range(2, 0, -2).join())
assert('3,1', loop.range(3, 0, -2).join())
