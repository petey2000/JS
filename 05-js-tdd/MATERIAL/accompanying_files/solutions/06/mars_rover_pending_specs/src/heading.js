const [NORTH, EAST, SOUTH, WEST] = [0, 1, 2, 3]
const numHeadings = 4

const processCommandOnHeading = (heading, leftOrRight) =>
  ({
    r: heading + 1,
    l: numHeadings + (heading - 1),
  }[leftOrRight] % numHeadings)

const oppositeOf = (heading) => (heading + 2) % numHeadings

module.exports = {
  processCommandOnHeading,
  oppositeOf,
  NORTH,
  EAST,
  SOUTH,
  WEST,
}
