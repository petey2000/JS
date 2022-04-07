const expect = require('must')
const { greet } = require('./greet')

describe('greet', () => {
    it('should greet with name', () => {
        expect(greet('Heribert')).to.equal('Hello, Heribert')
    })

    it('should use default as fallback', () => {
        expect(greet()).to.be.equal('Hello, my friend')
    })

    it('should scream fo upper case inputs', () => {
        expect(greet('GOLDY')).to.be.equal('HELLO, GOLDY')
    })

    it('should handle two names', () => {
        expect(greet('Heribert', 'Goldy')).to.be.equal(
            'Hello, Heribert and Goldy',
        )
    })
    it('should handle multiple names', () => {
        expect(greet('Heribert', 'Goldy', 'Ladislaus')).to.be.equal(
            'Hello, Heribert, Goldy, and Ladislaus',
        )
    })

    it('should handle multiple names', () => {
        expect(greet('Heribert', 'GOLDY', 'Ladislaus')).to.be.equal(
            'Hello, Heribert and Ladislaus. AND HELLO, GOLDY',
        )
    })
})
