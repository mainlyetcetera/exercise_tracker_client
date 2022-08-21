import input from 'readline-sync'

console.log('Welcome to exercise client!')

enum nameResponses {
  a = 'bicep curls'
}

export const promptForName = (): string => {
  const q = 'pick from following options {\na: bicep curls,\nb: someting else\n'
  const nameResponse = input.question(q)
  if (nameResponse && nameResponse === 'a') {
    return nameResponses[nameResponse]
  } else {
    return 'incorrect option provided'
  }
}
