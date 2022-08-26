type testParams = string | number | boolean

export const assertEqual = (
  actual: testParams,
  expected: testParams,
  testName: string
): boolean => {
  console.log(`test: ${testName}, should be ${expected}, and got ${actual}`)
  return actual === expected ? true : false
}
