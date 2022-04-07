'use strict'
const fs = require('fs')
const request = require('request')
const csvdb = require('./csvdb.js')

const IP = '127.0.0.1'
const PORT = 8081
const BASE_URL = `http://${IP}:${PORT}`

const assert = (a, b) => {
    if (a !== b) {
        console.log(`test failed: "${a}"`)
        process.exit(1)
    }
}

const doRequest = (path, method, input) => {
    const tryFetch = (resolve, reject) => {
        if (method === 'GET') {
            request.get(BASE_URL + path, (err, res, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(data))
                }
            })
        } else if (method === 'POST') {
            request.post(BASE_URL + path, { json: input }, err => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        } else if (method === 'DELETE') {
            request.delete(BASE_URL + path, err => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        } else if (method === 'PUT') {
            request.put(BASE_URL + path, { json: input }, err => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        }
    }

    return new Promise(tryFetch)
}

doRequest('/product', 'GET')
    .then(res => {
        assert(8, res.length)
        return doRequest('/product', 'POST', {
            code: 'TEST0815',
            shortdesc: 'test product',
            tagline: 'yo',
            quantity: '10',
            price: '9.90',
        })
    })
    .then(res => {
        return doRequest('/product', 'POST', {
            code: 'TEST0816',
            shortdesc: 'another test',
            tagline: 'yo',
            quantity: '1',
            price: '9.90',
        })
    })
    .then(res => {
        return doRequest('/product', 'GET')
    })
    .then(res => {
        assert(10, res.length)
        return doRequest('/product/TEST0815', 'GET')
    })
    .then(res => {
        assert(false, res.stockwarn)
        return doRequest('/product/TEST0816', 'GET')
    })
    .then(res => {
        assert(true, res.stockwarn)
        return doRequest('/product/TEST0816', 'GET')
    })
    .then(res => {
        return doRequest('/product/TEST0815', 'DELETE')
    })
    .then(res => {
        return doRequest('/product', 'PUT', {
            code: 'TEST0816',
            shortdesc: 'another test',
            tagline: 'yo',
            quantity: '1',
            price: '19.90',
        })
    })
    .then(res => {
        return doRequest('/product/TEST0816', 'GET')
    })
    .then(res => {
        assert('19.90', res.price)
        return doRequest('/product/TEST0816', 'DELETE')
    })
    .then(res => {
        return doRequest('/product', 'GET')
    })
    .then(res => {
        assert(8, res.length)
        console.log('all tests passed')
    })
    .catch(err => console.log('Error: ' + err))
