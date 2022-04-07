const expect = require('must')

describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1, 1)).to.be.equal(2)
    })
})

const add = (a, b) => a + b
