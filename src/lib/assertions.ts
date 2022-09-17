type testParams = string | number | boolean | {
  id: string,
  name: string
}

export const assertEqual = (
  actual: testParams,
  expected: testParams,
  testName: string
): boolean => {
  console.log(`test: ${testName}, should be ${expected}, and got ${actual}`)
  return actual === expected ? true : false
}
