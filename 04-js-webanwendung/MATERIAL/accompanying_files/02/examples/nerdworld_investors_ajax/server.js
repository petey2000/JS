'use strict'

const express = require('express')
const app = express()

const ip = '127.0.0.1'
const port = 8081

app.use(express.static('public'))

app.get('/info', (req, res) => {
    let info = {
        price: (174 + 20 * Math.random()).toFixed(2),
        volume: (16000000 + 5000000 * Math.random()).toFixed(2),
        time: new Date().toLocaleTimeString(),
    }
    res.send(info)
})

app.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`)
})
