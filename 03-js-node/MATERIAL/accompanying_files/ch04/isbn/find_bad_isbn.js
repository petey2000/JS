'use strict'

const fs = require('fs')
const validator = require('validator')

const data = fs.readFileSync('books.csv', 'UTF8')

const books = data.split('\n')
books.shift() // remove header

const getISBN = record => record.split(',')[1]

const badRecords = books
    .filter(record => record !== '')
    .filter(record => !validator.isISBN(getISBN(record)))

console.log('bad records: ' + badRecords.length)
badRecords.forEach(record => console.log(record))
console.log('ready')
