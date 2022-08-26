import { input } from '../../input'

export type promptAndResponse = {
  question: string,
  useInput: typeof input.question,
  testInput?: string
}
