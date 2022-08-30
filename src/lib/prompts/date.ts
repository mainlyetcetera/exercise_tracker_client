import { promptAndResponse } from '../types/types'

export const promptForExerciseDate = ({
  question,
  useInput,
  testInput
}: promptAndResponse): string => {

  let x, y, z

  if (testInput) {
    [x, y, z] = testInput.split('/')
  } else {
    console.log(question)
    x = useInput('Please enter the month! ')
    console.log(x)
    y = useInput('Please enter the day! ')
    console.log(y)
    z = useInput('Please enter the year! ')
    console.log(z)
  }

  return x && y && z 
    ? `${x}/${y}/${z}`
    : 'Please enter a date (format: MM/DD/YYYY)!'
}
