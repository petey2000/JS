'use strict'
const csvdb = require('./csvdb.js')
const express = require('express')
const app = express()

const IP = '127.0.0.1'
const PORT = 8081

// read products
csvdb.loadProductsFromFile()

// use EJS template engine
app.set('view engine', 'ejs')

// serve static files from public/
app.use(express.static('public'))

// render the index template from views/
app.get('/', (req, res) => {
    let products = csvdb
        .getProductCodes()
        .map(code => csvdb.getProductByCode(code))
    res.render('index', { items: products })
})

// start the server
app.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`)
})
