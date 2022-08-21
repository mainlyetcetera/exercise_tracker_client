import express from 'express'
import bodyParser from 'body-parser' 
import commander from 'commander'

describe('not a whole lot', () => {
  it('is kinda here', () => {
    expect(true).toBe(true)
  })

  it('doesn\'t freak out at modules', () => {
    expect(express).toBeTruthy()
    expect(bodyParser).toBeTruthy()
    expect(commander).toBeTruthy()
  })
})
