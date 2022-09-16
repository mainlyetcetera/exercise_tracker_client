import { input } from '../input'
import { promptForExerciseReps } from '../lib/prompts/reps'
import { assertEqual } from '../lib/assertions'
import { promptAndResponse } from '../lib/types/types'

const correctPrompt: promptAndResponse = {
  question: 'What was the reps? ',
  useInput: input.question,
  testInput: '69'
}

const incorrectPrompt: promptAndResponse = {
  question: 'What was the reps? ',
  useInput: input.question,
  testInput: 'a'
}

console.log(
  assertEqual(
    promptForExerciseReps(correctPrompt),
    69,
    'reps is the correct integer'
  )
)

console.log(
  assertEqual(
    promptForExerciseReps(incorrectPrompt),
    'Please enter an integer!',
    'reps is not an integer'
  )
)
