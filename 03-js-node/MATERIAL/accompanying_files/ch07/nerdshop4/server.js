'use strict'

const fs = require('fs')
const express = require('express')
const app = express()

const ip = '127.0.0.1'
const port = 8081

app.set('view engine', 'ejs')
app.use(express.static('public'))

fs.readFile('products.csv', 'UTF8', (error, data) => {
    let products = data.split('\n')
    products.shift()

    let objects = products.filter(row => row !== '').map(recordToObject)

    app.get('/', (req, res) => {
        res.render('index', { items: objects })
    })

    app.get('/product/:ix', (req, res) => {
        res.render('product', { product: objects[req.params.ix] })
    })

    app.listen(port, ip, () => {
        console.log(`Server running at http://${ip}:${port}/`)
    })
})

const recordToObject = record => {
    const fields = record.split(',')
    return {
        shortdesc: fields[0],
        tagline: fields[1],
        quantity: fields[2],
        price: fields[3],
        stockwarn: fields[2] <= 5 ? true : false,
    }
}
