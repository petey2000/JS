const expect = require('must')
const countWords = require('../src/countWords')

describe('countWords', () => {
    it('should return 0 for an empty string ', () => {
        expect(countWords('')).to.equal(0)
    })
    it('should count one word in a string', () => {
        expect(countWords('word')).to.equal(1)
    })
    it('should count 4 words in a string', () => {
        expect(countWords('this is a string')).to.equal(4)
    })
})
