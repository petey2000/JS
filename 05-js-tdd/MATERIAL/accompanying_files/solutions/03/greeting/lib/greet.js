const expect = require('must')

const isUpper = word =>
    word.split('').every(letter => letter.toUpperCase() === letter)

const greet = (...names) => {
    const lowerNames = names.filter(n => !isUpper(n))
    const upperNames = names.filter(isUpper)

    if (upperNames.length === 0) return lowerGreet(...lowerNames)

    if (lowerNames.length === 0 && upperNames.length === 1)
        return lowerGreet(...upperNames).toUpperCase()

    return `${lowerGreet(...lowerNames)}. AND ${lowerGreet(
        ...upperNames,
    ).toUpperCase()}`
}

const lowerGreet = (...names) => {
    const GREETING = 'Hello,'
    const UPCASE_GREETING = GREETING.toUpperCase()
    const DEFAULT = 'my friend'
    const last = names[names.length - 1]
    const others = names.slice(0, names.length - 1)

    if (names.length === 0) return `${GREETING} ${DEFAULT}`
    if (names.length === 1) return `${GREETING} ${names[0]}`
    if (names.length === 2) return `${GREETING} ${names[0]} and ${names[1]}`
    return `${GREETING} ${others.join(', ')}, and ${last}`
}

module.exports = { greet }
