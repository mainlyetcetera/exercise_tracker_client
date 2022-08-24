import { promptForExerciseWeight } from '../../src/index'
import { assert } from '../lib/assertions'

console.log(assert(promptForExerciseWeight('42'), 42, 'weight is the correct integer'))
console.log(assert(promptForExerciseWeight('a'), 'Please enter an integer!', 'weight is not an integer'))
