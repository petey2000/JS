'use strict'

const fs = require('fs')

fs.readFile('hello.txt', 'UTF8', (error, content) => {
    if (error) {
        console.log('could not read file')
    } else {
        console.log(content)
    }
})
