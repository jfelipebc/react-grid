module.exports = {
  collectCoverage: true,
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.json',
    },
  },
  preset : 'ts-jest/presets/js-with-babel',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom'
}