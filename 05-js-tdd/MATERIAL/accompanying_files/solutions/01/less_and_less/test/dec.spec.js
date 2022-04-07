const expect = require('must')
const dec = require('../src/dec')

describe('dec', () => {
    it('should decrease by 1', () => {
        expect(dec(2)).to.be.equal(1)
    })
})
