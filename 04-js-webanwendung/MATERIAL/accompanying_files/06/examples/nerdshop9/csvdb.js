'use strict'
const fs = require('fs')
const FILE_NAME = 'products.csv'
const NOT_FOUND = -1
const STOCK_WARN_LEVEL = 5

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
            stockwarn: fields[3] <= STOCK_WARN_LEVEL,
        }
    }
    let rows = fs.readFileSync(FILE_NAME, 'UTF8').split('\n')
    rows.shift() // skip header
    products = rows.filter(row => row !== '').map(recordToObject)
}

exports.saveProductsToFile = () => {
    let content =
        'Code,Short Description,Tagline,Quantity,Price\n' +
        products
            .map(
                p =>
                    `${p.code},${p.shortdesc},${p.tagline},${p.quantity},${p.price}\n`,
            )
            .join('')
    fs.writeFileSync(FILE_NAME, content, 'UTF8')
}

exports.getProductCodes = () => {
    return products.map(product => product.code)
}

exports.getProductByCode = code => {
    let index = getIndexByCode(code)
    if (index === NOT_FOUND) {
        return {}
    }
    return products[index]
}

exports.updateProduct = product => {
    let index = getIndexByCode(product.code)
    if (index === NOT_FOUND) {
        console.log('warning: could not update product (unknown code)')
        return
    }
    product.stockwarn = product.quantity <= STOCK_WARN_LEVEL
    products[index] = product
}

exports.insertProduct = product => {
    let index = getIndexByCode(product.code)
    if (index !== NOT_FOUND) {
        console.log('warning: could not insert product (code already present)')
        return
    }
    product.stockwarn = product.quantity <= STOCK_WARN_LEVEL
    products.push(product)
}

exports.deleteProduct = code => {
    let index = getIndexByCode(code)
    if (index === NOT_FOUND) {
        console.log('warning: could not delete product (unknown code)')
        return
    }
    products.splice(index, 1)
}

const getIndexByCode = code => {
    return products.findIndex(product => product.code === code)
}
