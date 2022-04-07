'use strict'
const fs = require('fs')

let products = []

exports.loadProductsFromFile = () => {
    const recordToObject = record => {
        const fields = record.split(',')
        return {
            code: fields[0],
            shortdesc: fields[1],
            tagline: fields[2],
            quantity: fields[3],
            price: fields[4],
            stockwarn: fields[3] <= 5,
        }
    }

    let rows = fs.readFileSync('products.csv', 'UTF8').split('\n')

    rows.shift() // skip header

    products = rows.filter(row => row !== '').map(recordToObject)
}

exports.getProductCodes = () => {
    return products.map(product => product.code)
}

exports.getProductByCode = code => {
    let matchingProduct = products.filter(product => product.code === code)
    if (matchingProduct.length === 1) {
        return matchingProduct[0]
    } else {
        return {} // not found (or not unique)
    }
}
