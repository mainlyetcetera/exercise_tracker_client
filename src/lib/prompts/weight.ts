import { promptAndResponse } from '../types/types'

export const promptForExerciseWeight = ({
  question,
  useInput,
  testInput
}: promptAndResponse): number | string => {
  console.log('This needs to be an integer!')

  const weightResponse = testInput
    ? testInput
    : useInput(question)

  return parseInt(weightResponse)
    ? parseInt(weightResponse)
    : 'Please enter an integer!'
}
