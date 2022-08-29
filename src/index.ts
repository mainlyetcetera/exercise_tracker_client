#!/usr/bin/ts-node

import { input } from './input'
import { promptForExerciseName } from './lib/prompts/name'
import { promptForExerciseSet } from './lib/prompts/set'
import { promptForExerciseWeight } from './lib/prompts/weight'
import { promptForExerciseDate } from './lib/prompts/date'
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

const setPrompt: promptAndResponse = {
  question: 'What was the set? ',
  useInput: input.question
}

const datePrompt: promptAndResponse = {
  question: '',
  useInput: input.question
}

const dateResult = promptForExerciseDate(datePrompt)
console.log({ dateResult })

const nameResult = promptForExerciseName(namePrompt)
console.log({ nameResult })

const numberResult = promptForExerciseWeight(weightPrompt)
console.log({ numberResult })

const setResult = promptForExerciseSet(setPrompt)
console.log({ setResult })
