'use strict'

const IP = '127.0.0.1'
const PORT = 8081

const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(express.static('public'))
app.use(bodyparser.json())

const csvdb = require('./csvdb.js')
csvdb.loadProductsFromFile()

app.get('/product/', (req, res) => {
    res.send(csvdb.getProductCodes())
})

app.get('/product/:code', (req, res) => {
    let selectedProduct = csvdb.getProductByCode(req.params.code)
    if (selectedProduct.code !== undefined) {
        res.send(selectedProduct)
    } else {
        res.status(404).send({})
    }
})

app.post('/product', (req, res) => {
    csvdb.insertProduct(req.body)
    csvdb.saveProductsToFile()
    res.send('')
})

app.put('/product', (req, res) => {
    csvdb.updateProduct(req.body)
    csvdb.saveProductsToFile()
    res.send('')
})

app.delete('/product/:code', (req, res) => {
    csvdb.deleteProduct(req.params.code)
    csvdb.saveProductsToFile()
    res.send('')
})

app.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`)
})
