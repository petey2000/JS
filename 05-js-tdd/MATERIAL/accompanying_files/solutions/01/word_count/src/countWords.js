const countWords = str => (str === '' ? 0 : str.split(/\W/).length)

module.exports = countWords
