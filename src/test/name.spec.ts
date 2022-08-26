import { input } from '../input'
import { promptForExerciseName } from '../lib/prompts/name'
import { assertEqual } from '../lib/assertions'
import { promptAndResponse } from '../lib/types/types'

const correctPrompt: promptAndResponse = {
  question: 'What was the exercise? ',
  useInput: input.question,
  testInput: 'a'
}

const inCorrectPrompt: promptAndResponse = {
  question: 'What was the exercise? ',
  useInput: input.question,
  testInput: '42'
}

console.log(
  assertEqual(
    promptForExerciseName(correctPrompt),
    'bicep curls',
    'name should recognize correct prompt for name'
  )
)
console.log(
  assertEqual(
    promptForExerciseName(inCorrectPrompt),
    'incorrect response given!',
    'name should error on incorrect prompt for name'
  )
)
