'use strict'

const fs = require('fs')
const express = require('express')
const app = express()

const ip = '127.0.0.1'
const port = 8081

app.use(express.static('public'))

fs.readFile('products.csv', 'UTF8', (error, data) => {
    let products = data.split('\n')
    products.shift()

    let pages = products.filter(row => row !== '').map(recordToHTML)

    app.get('/product/:ix', (req, res) => {
        res.send(pages[req.params.ix])
    })

    app.listen(port, ip, () => {
        console.log(`Server running at http://${ip}:${port}/`)
    })
})

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
