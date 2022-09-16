import { promptAndResponse, termResp } from '../types/types'

const nameResponses: termResp = {
  a: 'bicep curls',
  c: 'chest press',
  r: 'rear-deltoid fly',
  l: 'lat pull-down',
  q: 'quad press',
  h: 'hamstring press',
}

type nameResponse = {
  id: string;
  name: string;
}

export const promptForExerciseName = ({
  question, useInput, testInput
}: promptAndResponse): nameResponse => {

  let queryResponses = ''

  Object.keys(nameResponses).forEach((resp) => {
    if (nameResponses[resp]) {
      queryResponses += `${resp}: ${nameResponses[resp]}\n`
    }
  })

  const q = `
pick from following options:\n
${queryResponses}
`

  console.log(q)

  const nameResponse = testInput
    ? testInput
    : useInput(question)

  const successfulResponse: nameResponse = {
    id: '',
    name: ''
  };

  const unSuccessfulResponse: nameResponse = {
    id: '',
    name: 'incorrect response given!'
  };

  switch (nameResponses[nameResponse]) {
    case nameResponses.a:
      successfulResponse.id = 'a';
      successfulResponse.name = nameResponses[nameResponse];
      return successfulResponse;
    case nameResponses.c:
      successfulResponse.id = 'c';
      successfulResponse.name = nameResponses[nameResponse];
      return successfulResponse;
    case nameResponses.r:
      successfulResponse.id = 'r';
      successfulResponse.name = nameResponses[nameResponse];
      return successfulResponse;
    case nameResponses.l:
      successfulResponse.id = 'l';
      successfulResponse.name = nameResponses[nameResponse];
      return successfulResponse;
    case nameResponses.q:
      successfulResponse.id = 'q';
      successfulResponse.name = nameResponses[nameResponse];
      return successfulResponse;
    case nameResponses.h:
      successfulResponse.id = 'h';
      successfulResponse.name = nameResponses[nameResponse];
      return successfulResponse;
    default:
      return unSuccessfulResponse;
  }
}
