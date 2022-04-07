const expect = require('must')
const createStudent = require('./createStudent')

describe('createStudent', () => {
  it('should return a student with a name', () => {
    const student = createStudent('Kathrin')
    expect(student).to.be.eql({name: 'Kathrin'})
  })
})
