'use strict'

const validator = require('validator')

// JavaScript: The Definitive Guide, 6th Edition
console.log(validator.isISBN('978-0596805524'))

// Hoppla Zahlendreher
console.log(validator.isISBN('987-0596805524'))
