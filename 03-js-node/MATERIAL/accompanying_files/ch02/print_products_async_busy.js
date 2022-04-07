'use strict'

const fs = require('fs')
const data = fs.readFile('products.csv', 'UTF8', (error, data) =>
    console.log(data),
)
let i
for (i = 0; i < 2000000000; i += 1) {
    // be busy for a few seconds
}
console.log('ready')
