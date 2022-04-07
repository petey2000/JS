'use strict'

const IP = '127.0.0.1'
const PORT = 8081

const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(express.static('public'))
app.use(bodyparser.json())

const messages = []

app.get('/message/', (req, res) => {
    res.send(messages)
})

app.post('/message', (req, res) => {
    console.log(req.body)
    messages.push(req.body)
    res.send('')
})

app.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`)
})
