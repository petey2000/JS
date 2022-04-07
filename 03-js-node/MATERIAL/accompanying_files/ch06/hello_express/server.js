'use strict'

const express = require('express')
const app = express()

const ip = '127.0.0.1'
const port = 8081

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`)
})
