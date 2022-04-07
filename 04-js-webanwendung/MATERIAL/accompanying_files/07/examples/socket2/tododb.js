'use strict'

let list = []

exports.get = () => {
    return list
}

exports.add = text => {
    list.push({ text: String(text), done: false })
}

exports.set = (ix, done) => {
    list[ix].done = done
}

exports.clean = () => {
    list = list.filter(todo => !todo.done)
}

exports.dump = () => {
    console.log(JSON.stringify(list))
}
