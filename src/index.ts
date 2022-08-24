#!/usr/bin/ts-node
import input from 'readline-sync'

console.log('Welcome to exercise client!')

const promptForExerciseName = (): string => {
  type nmResp = {
    [key: string]: string
  }

  const nameResponses: nmResp = {
    a: 'bicep curls',
    c: 'chest press',
    r: 'rear-deltoid fly',
    l: 'lat pull-down',
    q: 'quad press',
    h: 'hamstring press'
  }

  let queryResponses = '' 

  Object.keys(nameResponses).forEach(resp => {
    if (nameResponses[resp]) {
      queryResponses += `${resp}: ${nameResponses[resp]}\n`
    }
  })

  const q = 
`
pick from following options:\n
${queryResponses}
`

  console.log(q)

  const nameResponse = input.question('What was the exercise? ')
  switch (nameResponses[nameResponse]) {
    case nameResponses.a:
      return nameResponses.a
    case nameResponses.c:
      return nameResponses.c
    case nameResponses.r:
      return nameResponses.r
    case nameResponses.l:
      return nameResponses.l
    case nameResponses.q:
      return nameResponses.q
    case nameResponses.h:
      return nameResponses.h
    default:
      return `incorrect response given: ${nameResponses[nameResponse]}`
  }
}

const promptForExerciseWeight = (weightResponse: string = input.question('What was the weight for the set? ')): number | string => {
  console.log('This needs to be an integer!')

  if (parseInt(weightResponse)) {
    return parseInt(weightResponse)
  } else {
    return 'Please enter an integer!'
  }
}

const nameResult = promptForExerciseName()
console.log({ nameResult })

const numberResult = promptForExerciseWeight()
console.log({ numberResult })

type testParams = string | number | boolean

const assert = (actual: testParams, expected: testParams, testName: string): boolean => {
  console.log(`${testName} should be ${actual}, and got ${expected}`)
  return actual === expected ? true : false
}

console.log(assert(promptForExerciseWeight('42'), 42, 'weight is the correct integer'))
