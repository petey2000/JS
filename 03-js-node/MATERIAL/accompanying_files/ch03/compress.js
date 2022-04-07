'use strict'

const fs = require('fs')
const zlib = require('zlib')

let data = fs.readFileSync('products.html', 'UTF8')
fs.writeFileSync('products.html.gz', zlib.gzipSync(data))
