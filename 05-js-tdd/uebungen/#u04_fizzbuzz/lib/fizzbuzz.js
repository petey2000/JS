const divisibleBy = (v, divisor) => v % divisor === 0

const fizzbuzz = n =>
    `${divisibleBy(n, 3) ? 'fizz' : ''}${divisibleBy(n, 5) ? 'buzz' : ''}${divisibleBy(n, 7) ? 'bazz' : ''}` || n

module.exports = { fizzbuzz, divisibleBy }
