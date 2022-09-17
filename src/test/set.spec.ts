import { input } from '../input'
import { promptForExerciseSet } from '../lib/prompts/set'
import { assertEqual } from '../lib/assertions'
import { promptAndResponse } from '../lib/types/types'

const correctPrompt: promptAndResponse = {
  question: 'What was the set id? ',
  useInput: input.question,
  testInput: '2'
}

const incorrectPrompt: promptAndResponse = {
  question: 'What was the set id? ',
  useInput: input.question,
  testInput: '5'
}

console.log(
  assertEqual(
    promptForExerciseSet(correctPrompt),
    2,
    'set should handle correct prompt for set'
  )
)
console.log(
  assertEqual(
    promptForExerciseSet(incorrectPrompt),
    'Please enter a set identifier (1, 2, 3, 4)!',
    'set should handle incorrect prompt for set'
  )
)
