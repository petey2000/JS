'use strict'

const fs = require('fs')
const data = fs.readFileSync('products.csv', 'UTF8')
console.log(data)
