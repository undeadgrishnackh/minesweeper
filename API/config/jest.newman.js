module.exports = {
  displayName: 'newman',
  runner: 'jest-runner-newman',
  moduleFileExtensions: ['js'],
  rootDir: '../test',
  testMatch: [`**/*.test.api.js`],
};