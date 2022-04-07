const expect = require('must')

const {
  processCommandOnHeading,
  oppositeOf,
  NORTH,
  EAST,
  SOUTH,
  WEST,
} = require('./heading')

describe('Heading', () => {
  it('should change from NORTH to EAST on "r"', () => {
    expect(processCommandOnHeading(NORTH, "r")).to.be.equal(
      EAST
    )
  })

  it('should change from EAST to SOUTH on "r"', () => {
    expect(processCommandOnHeading(EAST, "r")).to.be.equal(
      SOUTH
    )
  })

  it('should change from WEST to SOUTH on "l"', () => {
    expect(processCommandOnHeading(WEST, "l")).to.be.equal(
      SOUTH
    )
  })

  it('should change from NORTH to WEST on "l"', () => {
    expect(processCommandOnHeading(NORTH, "l")).to.be.equal(
      WEST
    )
  })

  it('should report the opposite Heading of NORTH', () => {
    expect(oppositeOf(NORTH)).to.be.equal(SOUTH)
  })

  it('should report the opposite Heading of SOUTH', () => {
    expect(oppositeOf(SOUTH)).to.be.equal(NORTH)
  })

  it('should report the opposite Heading of EAST', () => {
    expect(oppositeOf(EAST)).to.be.equal(WEST)
  })
  
  it('should report the opposite Heading of WEST', () => {
    expect(oppositeOf(WEST)).to.be.equal(EAST)
  })
})
