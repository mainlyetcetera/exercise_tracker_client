import { promptAndResponse } from '../types/types'

export const promptForExerciseReps = ({
  question,
  useInput,
  testInput
}: promptAndResponse): number | string => {
  console.log('This needs to be an integer!')

  const repsResponse = testInput
    ? testInput
    : useInput(question)

  return parseInt(repsResponse)
    ? parseInt(repsResponse)
    : 'Please enter an integer!'
}
