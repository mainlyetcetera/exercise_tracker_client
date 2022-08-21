// import commander from 'commander'
import { promptForName } from '../index'

describe('the client', () => {
  it('should determine appropriate name based on input', () => {
    const name = 'bicep curls'
    const response = promptForName()
    // a
    expect(response).toBe(name)
  })
})
