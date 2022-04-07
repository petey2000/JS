'use strict'
const csvdb = require('./csvdb.js')
const express = require('express')
const app = express()

const IP = '127.0.0.1'
const PORT = 8081

// read products
csvdb.loadProductsFromFile()

// serve static files from public/
app.use(express.static('public'))

// return list of product codes
app.get('/product/', (req, res) => {
    res.send(csvdb.getProductCodes())
})

// return a product identified by its code
app.get('/product/:code', (req, res) => {
    let selectedProduct = csvdb.getProductByCode(req.params.code)
    if (selectedProduct.code) {
        res.send(selectedProduct)
    } else {
        res.status(404).send({})
    }
})

// start the server
app.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`)
})
