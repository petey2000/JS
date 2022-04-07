'use strict'

const shortenNames = require('./shorter.js').shortenNames

console.log(shortenNames(['Ladislaus Jones']))
// => [ "L. Jones" ]

console.log(shortenNames(['Ladislaus Jones', 'Heribert Gold']))
// => [ "L. Jones",  "H. Gold" ]

console.log(shortenNames(['Wolfgang Amadeus Mozart']))
// => [ "W. A. Mozart" ]
