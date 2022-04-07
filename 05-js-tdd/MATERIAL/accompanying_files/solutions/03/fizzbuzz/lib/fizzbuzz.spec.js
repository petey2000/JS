const expect = require('must')
const { fizzbuzz } = require('./fizzbuzz')

describe('fizzbuzz', () => {
    it('should return a normal number', () => {
        expect(fizzbuzz(1)).to.be.equal(1)
    })
    it('should return fizz if the number is a multiple of 3', () => {
        expect(fizzbuzz(6)).to.be.equal('fizz')
    })
    it('should return fizz if the number is a multiple of 5', () => {
        expect(fizzbuzz(20)).to.be.equal('buzz')
    })
    it('should return fizzbuzz if the number is a multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).to.be.equal('fizzbuzz')
    })
})
