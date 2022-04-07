'use strict'

const crypto = require('crypto')
const PASSWORD_LENGTH = 10
const s = '23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ!.,;#$%/+*'

let buf = crypto.randomBytes(PASSWORD_LENGTH)
let password = Array.from(buf)
    .map(byte => s.charAt(byte % s.length))
    .join('')

console.log(password)
