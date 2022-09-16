import { promptAndResponse, termResp } from '../types/types'

const setResponses: { [key: string]: number } = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
}

export const promptForExerciseSet = ({
  question,
  useInput,
  testInput
}: promptAndResponse): number | string => {
  console.log('This should be a set identifier (1, 2, 3, 4)!')

  const setResponse = testInput
    ? testInput
    : useInput(question)

  return setResponses[setResponse]
    ? setResponses[setResponse]
    : 'Please enter a set identifier (1, 2, 3, 4)!'
}
