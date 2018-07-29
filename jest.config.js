const coverageThreshold = 100;

module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  coverageReporters: [
    'text'
  ],
  coverageThreshold: {
    global: {
      branches: coverageThreshold,
      functions: coverageThreshold,
      lines: coverageThreshold,
      statements: coverageThreshold
    }
  },
  moduleNameMapper: {
    '^.+\\.(scss)$': 'identity-obj-proxy'
  },
  resetMocks: true,
  resetModules: true,
  setupTestFrameworkScriptFile: '<rootDir>/helpers/jest-setup.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testMatch: [
    '<rootDir>/src/**/*.spec.js'
  ],
  testURL: 'http://localhost/'
};
