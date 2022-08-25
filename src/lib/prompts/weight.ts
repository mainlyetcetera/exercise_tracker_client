import { promptAndResponse } from '../types/types'

export const promptForExerciseWeight = ({
  question,
  useInput,
}: promptAndResponse): number | string => {
  console.log('This needs to be an integer!')

  const weightResponse = useInput(question)
  return parseInt(weightResponse)
    ? parseInt(weightResponse)
    : 'Please enter an integer!'
}
