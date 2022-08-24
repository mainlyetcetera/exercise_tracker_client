type testParams = string | number | boolean

export const assert = (actual: testParams, expected: testParams, testName: string): boolean => {
  console.log(`${testName} should be ${actual}, and got ${expected}`)
  return actual === expected ? true : false
}
