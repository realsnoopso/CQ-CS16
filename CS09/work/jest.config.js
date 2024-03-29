/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  // testRegex: 'countset.test.ts',
  // testRegex: 'squadset.test.ts',
  // testRegex: 'Func-utils.test.ts',
  // testRegex: 'Func-squadset.test',
  // testRegex: 'Func-countset.test',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
