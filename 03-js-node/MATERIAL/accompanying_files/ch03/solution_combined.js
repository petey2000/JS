'use strict'

const fs = require('fs')
const zlib = require('zlib')

const data = fs.readFileSync('products.csv', 'UTF8')

const products = data.split('\n')
products.shift() // remove header

const recordToHTML = record => {
    const fields = record.split(',')

    let html = `
        <h1>${fields[0]}</h1>
        <p>${fields[1]}</p>
        <p>Price: EUR ${fields[3]}</p>`

    if (Number(fields[2]) <= 5) {
        html += `<p>Last items in stock!</p>`
    }

    return html
}

const html = products
    .filter(row => row !== '')
    .map(recordToHTML)
    .join()

fs.writeFileSync('products.html.gz', zlib.gzipSync(html))

console.log('done')
