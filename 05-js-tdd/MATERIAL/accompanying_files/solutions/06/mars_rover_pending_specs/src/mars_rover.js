const {
  processCommandOnHeading,
  oppositeOf,
  NORTH,
  EAST,
  SOUTH,
  WEST,
} = require('./heading')

const startRoverAtPositionFacing = (position, heading) => ({
  position,
  heading,
})

const processMultipleCommands = (rover, commands) =>
  commands
    .split('')
    .reduce((r, c) => processCommandOnRover(r, c), rover)

const processCommandOnRover = (rover, command) =>
  ({
    f: moveInFacingDirection,
    b: moveInOppositeDirection,
    r: turnRight,
    l: turnLeft,
  }[command](rover))

const moveInFacingDirection = (rover) =>
  moveTo(rover, rover.heading)

const moveInOppositeDirection = (rover) =>
  moveTo(rover, oppositeOf(rover.heading))

const moveTo = (rover, heading) => ({
  ...rover,
  position: [
    rover.position[0] +
      ({ [EAST]: 1, [WEST]: -1 }[heading] || 0),
    rover.position[1] +
      ({ [SOUTH]: 1, [NORTH]: -1 }[heading] || 0),
  ],
})

const turnRight = (rover) => turn(rover, 'r')
const turnLeft = (rover) => turn(rover, 'l')

const turn = (rover, leftOrRight) => ({
  ...rover,
  heading: processCommandOnHeading(
    rover.heading,
    leftOrRight
  ),
})

module.exports = {
  startRoverAtPositionFacing,
  processCommandOnRover,
  processMultipleCommands,
  NORTH,
  EAST,
  SOUTH,
  WEST,
}
