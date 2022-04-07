'use strict'

const fs = require('fs')
const data = fs.readFile('products.csv', 'UTF8', (error, data) =>
    console.log(data),
)
