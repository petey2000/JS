const expect = require('must')
const {
  startRoverAtPositionFacing,
  processCommandOnRover,
  processMultipleCommands,
  NORTH,
  EAST,
  SOUTH,
  WEST,
} = require('./mars_rover')

describe('Rover', () => {
  it('should start on an initial position and heading', () => {
    expect(
      startRoverAtPositionFacing([3, 4], NORTH)
    ).to.eql({
      position: [3, 4],
      heading: NORTH,
    })
  })

  it('should move forward', () => {
    const rover = startRoverAtPositionFacing([2, 7], NORTH)
    expect(
      processCommandOnRover(rover, 'f').position
    ).to.eql([2, 6])
  })

  it('should move backward', () => {
    const rover = startRoverAtPositionFacing([2, 7], NORTH)
    expect(
      processCommandOnRover(rover, 'b').position
    ).to.eql([2, 8])
  })

  it('should turn right', () => {
    const rover = startRoverAtPositionFacing([2, 7], NORTH)
    expect(
      processCommandOnRover(rover, 'r').heading
    ).to.be.equal(EAST)
  })

  it('should turn left', () => {
    const rover = startRoverAtPositionFacing([2, 7], NORTH)
    expect(
      processCommandOnRover(rover, 'l').heading
    ).to.be.equal(WEST)
  })

  it('should move forward facing SOUTH', () => {
    const rover = startRoverAtPositionFacing([3, 7], SOUTH)
    processCommandOnRover(rover, 'f')
    expect(
      processCommandOnRover(rover, 'f').position
    ).to.eql([3, 8])
  })

  it('should move forward facing EAST', () => {
    const rover = startRoverAtPositionFacing([3, 7], EAST)
    processCommandOnRover(rover, 'f')
    expect(
      processCommandOnRover(rover, 'f').position
    ).to.eql([4, 7])
  })

  it('should move forward facing WEST', () => {
    const rover = startRoverAtPositionFacing([3, 7], WEST)
    processCommandOnRover(rover, 'f')
    expect(
      processCommandOnRover(rover, 'f').position
    ).to.eql([2, 7])
  })

  it('should move backward facing SOUTH', () => {
    const rover = startRoverAtPositionFacing([2, 7], SOUTH)
    expect(
      processCommandOnRover(rover, 'b').position
    ).to.eql([2, 6])
  })

  it('perform several commands from a command string', () => {
    const rover = startRoverAtPositionFacing([0, 0], NORTH)
    expect(
      processMultipleCommands(rover, 'rff').position
    ).to.eql([2, 0])
  })
})
