'use strict'

const IP = '127.0.0.1'
const PORT = 8081

const express = require('express')
const app = express()
app.use(express.static('public'))

// socket.io initialization
const http = require('http')
const socketIo = require('socket.io')
const webServer = http.Server(app)
const io = socketIo(webServer)

// log incoming connection
io.on('connection', socket => {
    console.log(
        `new client (${socket.id}) connected from ${socket.conn.remoteAddress}`,
    )
})

// read text from console and send it to the clients
let stdin = process.stdin.addListener('data', d => {
    io.emit('message', d.toString())
})

webServer.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`)
})
