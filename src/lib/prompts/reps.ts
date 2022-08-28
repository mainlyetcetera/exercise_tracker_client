import { promptAndResponse, termResp } from '../types/types'

const repsResponses: termResp = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  f: 'f'
}

export const promptForExerciseReps = ({
  question,
  useInput,
  testInput
}: promptAndResponse): number | string => {
  console.log('This should be the number of reps!')

  const repsResponse = testInput
    ? testInput
    : useInput(question)

  return repsResponses[repsResponse]
    ? repsResponses[repsResponse]
    : 'Please enter the number of reps!'
}
