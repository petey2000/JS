'use strict'

const fs = require('fs')
const util = require('util')

const getFileContent = util.promisify(fs.readFile)

getFileContent('hello.txt', 'UTF8')
    .then(content => console.log(content))
    .catch(error => console.log('could not read file ' + error.path))
