import input from 'readline-sync'

export type promptAndResponse = {
  question: string,
  useInput: typeof input.question
}
