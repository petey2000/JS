const expect = require('must')
const createStudent = require('./createStudent')

describe('createStudent', () => {
  it('should return a student with a name', () => {
    const student1 = createStudent('Kathrin')
    const student2 = createStudent('Kathrin')
    expect(student1).to.be.eql(student2)
  })
})
