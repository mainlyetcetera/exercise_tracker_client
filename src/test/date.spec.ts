import { input } from '../input'
import { promptForExerciseDate } from '../lib/prompts/date'
import { assertEqual } from '../lib/assertions'
import { promptAndResponse } from '../lib/types/types'

const correctPrompt: promptAndResponse = {
  question: 'What was the exercise date? ',
  useInput: input.question,
  testInput: '08/21/2022'
}

const incorrectPrompt: promptAndResponse = {
  question: 'What was the exercise date? ',
  useInput: input.question,
  testInput: '5'
}

console.log(
  assertEqual(
    promptForExerciseDate(correctPrompt),
    '08/21/2022',
    'date should handle correct prompt for date'
  )
)

console.log(
  assertEqual(
    promptForExerciseDate(incorrectPrompt),
    'Please enter a date (format: MM/DD/YYYY)!',
    'date should handle incorrect prompt for date'
  )
)
