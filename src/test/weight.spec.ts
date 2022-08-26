import { input } from '../input'
import { promptForExerciseWeight } from '../lib/prompts/weight'
import { assertEqual } from '../lib/assertions'
import { promptAndResponse } from '../lib/types/types'

const correctPrompt: promptAndResponse = {
  question: 'What was the weight? ',
  useInput: input.question,
  testInput: '42'
}

const incorrectPrompt: promptAndResponse = {
  question: 'What was the weight? ',
  useInput: input.question,
  testInput: 'a'
}

console.log(
  assertEqual(
    promptForExerciseWeight(correctPrompt),
    42,
    'weight is the correct integer'
  )
)

console.log(
  assertEqual(
    promptForExerciseWeight(incorrectPrompt),
    'Please enter an integer!',
    'weight is not an integer'
  )
)
