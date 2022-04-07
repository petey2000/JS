'use strict'

// print a phrase, a word at a time:
// workaround to avoid the pyramid of doom

const words = 'The pyramid of doom keeps growing.'.split(' ')

const printWord = n => {
    console.log(words[n])
    n += 1
    if (n < words.length) {
        setTimeout(() => printWord(n), 1000)
    }
}

printWord(0)
