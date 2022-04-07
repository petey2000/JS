'use strict'

const fs = require('fs')

let getFileContent = name =>
    new Promise((resolve, reject) =>
        fs.readFile(name, 'UTF8', (error, content) => {
            if (error) {
                reject('could not read file ' + name)
            } else {
                resolve(content)
            }
        }),
    )

Promise.all([
    getFileContent('hello1.txt'),
    getFileContent('hello2.txt'),
    getFileContent('hello3.txt'),
    getFileContent('hello4.txt'),
    getFileContent('hello5.txt'),
    getFileContent('hello6.txt'),
])
    .then(contents => contents.forEach(content => console.log(content)))
    .catch(error => console.log(error))
