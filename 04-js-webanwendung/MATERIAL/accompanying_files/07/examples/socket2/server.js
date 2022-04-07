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

let tododb = require('./tododb.js')

tododb.add('buy coffee')
tododb.add('write a book about JavaScript')

io.on('connection', socket => {
    socket.on('get', () => {
        console.log('get()')
        io.emit('push', tododb.get())
    })

    socket.on('add', text => {
        console.log('add(' + text + ')')
        tododb.add(text)
        io.emit('push', tododb.get())
    })

    socket.on('set', (ix, isDone) => {
        console.log('set(' + ix + ', ' + isDone + ')')
        tododb.set(ix, isDone)
        io.emit('push', tododb.get())
    })

    socket.on('clean', () => {
        console.log('clean()')
        tododb.clean()
        io.emit('push', tododb.get())
    })

    socket.on('dump', () => {
        console.log('dump()')
        tododb.dump()
        io.emit('push', tododb.get())
    })
})

webServer.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`)
})
