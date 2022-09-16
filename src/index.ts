#!/usr/bin/ts-node

import { input } from './input'
import { promptForExerciseName } from './lib/prompts/name'
import { promptForExerciseSet } from './lib/prompts/set'
import { promptForExerciseWeight } from './lib/prompts/weight'
import { promptForExerciseReps } from './lib/prompts/reps'
import { promptForExerciseDate } from './lib/prompts/date'
import { promptAndResponse } from './lib/types/types'
import fetch from 'node-fetch'

console.log('Welcome to exercise client!')

const namePrompt: promptAndResponse = {
  question: 'What was the exercise? ',
  useInput: input.question
}

const weightPrompt: promptAndResponse = {
  question: 'What was the weight? ',
  useInput: input.question
}

const repsPrompt: promptAndResponse = {
  question: 'What was the reps? ',
  useInput: input.question
}

const setPrompt: promptAndResponse = {
  question: 'What was the set? ',
  useInput: input.question
}

const datePrompt: promptAndResponse = {
  question: 'What was the date? ',
  useInput: input.question
}

const dateResult = promptForExerciseDate(datePrompt)
console.log({ dateResult })

const nameResult = promptForExerciseName(namePrompt)
console.log({ nameResult })

const setResult = promptForExerciseSet(setPrompt)
console.log({ setResult })

const weightResult = promptForExerciseWeight(weightPrompt)
console.log({ weightResult })

const repsResult = promptForExerciseReps(repsPrompt)
console.log({ repsResult })

type bodyProp = {
  [key: string]: string | number
}

const requestBody: bodyProp = {
  date: dateResult,
  name: nameResult.name,
  exercise_id: nameResult.id,
  set: setResult,
  reps: repsResult,
  weight: weightResult,
}

const sendExerciseData = async (url: string, data: string): Promise<Response> => {
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })

  return resp.json()
}

const url = 'http://localhost:5000/exercise'

const blah = (async () => {
  const result = await sendExerciseData(url, JSON.stringify(requestBody))
  console.log(result)
  return result
})()
