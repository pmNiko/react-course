// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@heroes/(.*)$": "<rootDir>/src/heroes/$1",
    "^@auth/(.*)$": "<rootDir>/src/auth/$1",
    "^@ui/(.*)$": "<rootDir>/src/ui/$1",
  },
}