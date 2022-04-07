'use strict'
const fs = require('fs')
const request = require('request')

const IP = '127.0.0.1'
const PORT = 8081
const URL = `http://${IP}:${PORT}/message`

const doPostRequest = text => {
    const tryFetch = (resolve, reject) => {
        request.post(URL, { json: { content: text } }, err => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    }
    return new Promise(tryFetch)
}

doPostRequest('Hi, how are you?').catch(err => console.log('Error: ' + err))
