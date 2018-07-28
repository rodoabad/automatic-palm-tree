const coverageThreshold = 100;

module.exports = {
  bail: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.tsx'
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
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '^.+\\.(scss)$': 'identity-obj-proxy'
  },
  setupTestFrameworkScriptFile: '<rootDir>/helpers/jest-setup.ts',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testMatch: [
    '<rootDir>/src/**/*.spec.{ts,tsx}'
  ],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  verbose: true
};
