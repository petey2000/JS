'use strict'

exports.shortenNames = names => names.map(name => shorten(name))

const shorten = name => {
    let tokens = name.trim().split(/\s+/)
    let last = tokens.pop()
    return tokens.map(str => str.charAt(0) + '.').join(' ') + ' ' + last
}
