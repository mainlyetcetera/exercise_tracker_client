import input from 'readline-sync'
import { promptForExerciseWeight } from '../lib/prompts/weight'
import { assertEqual } from '../lib/assertions'
import { promptAndResponse } from '../lib/types/types'

const prompt: promptAndResponse = {
  question: 'What was the weight? ',
  useInput: input.question,
}

console.log('expecting 42')
console.log(
  assertEqual(
    promptForExerciseWeight(prompt),
    42,
    'weight is the correct integer'
  )
)

console.log('expecting a')
console.log(
  assertEqual(
    promptForExerciseWeight(prompt),
    'Please enter an integer!',
    'weight is not an integer'
  )
)
