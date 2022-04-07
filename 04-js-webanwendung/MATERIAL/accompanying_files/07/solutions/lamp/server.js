'use strict'

const IP = '127.0.0.1'
const PORT = 8081

const express = require('express')
const app = express()
app.use(express.static('public'))

const http = require('http')
const socketIo = require('socket.io')
const webServer = http.Server(app)
const io = socketIo(webServer)

let light = false // global state

io.on('connection', socket => {
    socket.on('getLight', () => {
        socket.emit('setLight', light)
    })
    socket.on('toggleLight', () => {
        light = !light
        io.emit('setLight', light)
    })
})

webServer.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`)
})
