module.exports = {
  bail: true,
  collectCoverage: false,
  collectCoverageFrom: [
      'src/**/*.js'
  ],
  coverageReporters: [
      'text'
  ],
  coverageThreshold: {
      global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100
      }
  },
  moduleNameMapper: {
      '^.+\\.(scss)$': 'identity-obj-proxy'
  },
  setupTestFrameworkScriptFile: '<rootDir>/helpers/jest-setup.js',
  snapshotSerializers: [
      'enzyme-to-json/serializer'
  ],
  testMatch: [
      '<rootDir>/src/**/*.spec.js'
  ],
  verbose: true
};
