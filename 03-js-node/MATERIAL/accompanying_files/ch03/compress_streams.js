'use strict'

const fs = require('fs')
const zlib = require('zlib')
const gzipCompressor = zlib.createGzip()

let inputStream = fs.createReadStream('products.html')
let outputStream = fs.createWriteStream('products.html.gz')

inputStream.pipe(gzipCompressor).pipe(outputStream)
