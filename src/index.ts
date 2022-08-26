#!/usr/bin/ts-node
import { input } from './input'
import { promptForExerciseName } from './lib/prompts/name'
import { promptForExerciseWeight } from './lib/prompts/weight'
import { promptAndResponse } from './lib/types/types'

console.log('Welcome to exercise client!')

const namePrompt: promptAndResponse = {
  question: 'What was the exercise? ',
  useInput: input.question
}

const weightPrompt: promptAndResponse = {
  question: 'What was the weight? ',
  useInput: input.question
}

const nameResult = promptForExerciseName(namePrompt)
console.log({ nameResult })

const numberResult = promptForExerciseWeight(weightPrompt)
console.log({ numberResult })
