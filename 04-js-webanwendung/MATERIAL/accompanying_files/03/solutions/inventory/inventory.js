'use strict'
const csvdb = require('./csvdb.js')

csvdb.loadProductsFromFile()

const stockValue = product => product.quantity * product.price

console.log(
    csvdb
        .getProductCodes()
        .map(code => stockValue(csvdb.getProductByCode(code)))
        .reduce((a, b) => a + b),
)
