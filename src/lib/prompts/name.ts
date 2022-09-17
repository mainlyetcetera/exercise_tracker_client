import { promptAndResponse } from '../types/types'
import { respIds } from '../types/enums/respIds'
import { nameResponses } from '../consts/nameResponse'

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

  console.log(`pick from following options:\n${queryResponses}`);

  const nameResponse = testInput
    ? testInput
    : useInput(question)

  const r: nameResponse = {
    id: '',
    name: 'incorrect response given!'
  }

  switch (nameResponses[nameResponse]) {
    case nameResponses.a:
      r.id = respIds.a;
      r.name = nameResponses[nameResponse];
      return r;
    case nameResponses.c:
      r.id = respIds.c;
      r.name = nameResponses[nameResponse];
      return r;
    case nameResponses.r:
      r.id = respIds.r;
      r.name = nameResponses[nameResponse];
      return r;
    case nameResponses.l:
      r.id = respIds.l;
      r.name = nameResponses[nameResponse];
      return r;
    case nameResponses.q:
      r.id = respIds.q;
      r.name = nameResponses[nameResponse];
      return r;
    case nameResponses.h:
      r.id = respIds.h;
      r.name = nameResponses[nameResponse];
      return r;
    default:
      return r;
  }
}
