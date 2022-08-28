import { input } from '../input'
import { promptForExerciseReps } from '../lib/prompts/reps'
import { assertEqual } from '../lib/assertions'
import { promptAndResponse } from '../lib/types/types'

const correctNumericPrompt: promptAndResponse = {
  question: 'How many reps? ',
  useInput: input.question,
  testInput: '2'
}

const correctSymbolicPrompt: promptAndResponse = {
  question: 'How many reps? ',
  useInput: input.question,
  testInput: 'f'
}

const incorrectNumericPrompt: promptAndResponse = {
  question: 'How many reps? ',
  useInput: input.question,
  testInput: '10'
}

const incorrectStringPrompt: promptAndResponse = {
  question: 'How many reps? ',
  useInput: input.question,
  testInput: 'a'
}

console.log(
  assertEqual(
    promptForExerciseReps(correctNumericPrompt),
    '2',
    'reps should handle correct numeric prompt for reps'
  )
)
console.log(
  assertEqual(
    promptForExerciseReps(correctSymbolicPrompt),
    'f',
    'reps should handle correct symbolic prompt for reps'
  )
)
console.log(
  assertEqual(
    promptForExerciseReps(incorrectNumericPrompt),
    'Please enter the number of reps!',
    'reps should handle incorrect prompt for reps'
  )
)
console.log(
  assertEqual(
    promptForExerciseReps(incorrectStringPrompt),
    'Please enter the number of reps!',
    'reps should handle incorrect prompt for reps'
  )
)
