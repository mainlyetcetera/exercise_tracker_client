#!/usr/bin/ts-node

import input from 'readline-sync'

if (process) {
console.log('have process')
}

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
  const nameResponse = input.question('What was the exercise?')
  console.log({ nameResponse })
  switch (nameResponses[nameResponse]) {
    case nameResponses.a:
      console.log(nameResponses.a)
      return nameResponses.a
    case nameResponses.c:
      console.log(nameResponses.c)
      return nameResponses.c
    case nameResponses.r:
      console.log(nameResponses.r)
      return nameResponses.r
    case nameResponses.l:
      console.log(nameResponses.l)
      return nameResponses.l
    case nameResponses.q:
      console.log(nameResponses.q)
      return nameResponses.q
    case nameResponses.h:
      console.log(nameResponses.h)
      return nameResponses.h
    default:
      console.log(`incorrect response given: ${nameResponses[nameResponse]}`)
      return `incorrect response given: ${nameResponses[nameResponse]}`
  }
}

const nameResult = promptForExerciseName()
console.log({ nameResult })

  // if (nameResponse && nameResponse === 'a') {
  //   return nameResponses[nameResponse]
  // } else {
  //   return 'incorrect option provided'
  // }
// }
