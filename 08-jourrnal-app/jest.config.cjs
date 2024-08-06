// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [],
  // transformIgnorePatterns: ['/node_modules/(?!@firebase)'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@auth/(.*)$': '<rootDir>/src/auth/$1',
    '^@journal/(.*)$': '<rootDir>/src/journal/$1',
    '^@router/(.*)$': '<rootDir>/src/router/$1',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
  },
};
