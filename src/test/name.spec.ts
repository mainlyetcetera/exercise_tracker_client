import input from 'readline-sync'
import { promptForExerciseName } from '../lib/prompts/name'
import { assertEqual } from '../lib/assertions'
import { promptAndResponse } from '../lib/types/types'

const prompt: promptAndResponse = {
  question: 'What was the exercise? ',
  useInput: input.question
}

console.log("expecting 'a'")
console.log(
  assertEqual(
    promptForExerciseName(prompt),
    'bicep curls',
    'name should recognize correct prompt for name'
  )
)
console.log("expecting '42'")
console.log(
  assertEqual(
    promptForExerciseName(prompt),
    'incorrect response given!',
    'name should error on incorrect prompt for name'
  )
)
