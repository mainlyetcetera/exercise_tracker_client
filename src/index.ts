#!/usr/bin/ts-node
import input from 'readline-sync'

console.log('Welcome to exercise client!')

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

const q = `
pick from following options:\n
${queryResponses}
`

console.log(q)

const promptForExerciseName = (): string => {
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

const nameResult = promptForExerciseName()
console.log({ nameResult })
