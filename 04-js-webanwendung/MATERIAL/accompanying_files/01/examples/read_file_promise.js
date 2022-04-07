'use strict'

const fs = require('fs')

let getFileContent = name =>
    new Promise((resolve, reject) =>
        fs.readFile(name, 'UTF8', (error, content) => {
            if (error) {
                reject('could not read file')
            } else {
                resolve(content)
            }
        }),
    )

getFileContent('hello.txt')
    .then(content => console.log(content))
    .catch(error => console.log(error))
