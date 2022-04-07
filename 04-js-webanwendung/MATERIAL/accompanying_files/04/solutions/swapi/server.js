'use strict'
const express = require('express')
const app = express()

const IP = '127.0.0.1'
const PORT = 8081

// serve static files from public/
app.use(express.static('public'))

// start the server
app.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`)
})
