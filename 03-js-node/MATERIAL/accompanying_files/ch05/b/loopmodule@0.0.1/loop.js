'use strict'

exports.times = (n, fn) => {
    const result = new Array(n)
    for (let i = 0; i < n; i += 1) {
        result[i] = fn()
    }
    return result
}

exports.range = (startOrEnd, end, step) =>
    end !== undefined
        ? rangeFromStartToEnd(startOrEnd, end, step)
        : rangeFromStartToEnd(0, startOrEnd)

const rangeFromStartToEnd = (start, end, step = 1) => {
    const length = Math.max(Math.ceil((end - start) / step), 0)
    const result = Array(length)
    const sign = Math.sign(step)
    let index = 0
    for (let value = start; value * sign < end * sign; value += step) {
        result[index] = value
        index += 1
    }
    return result
}
