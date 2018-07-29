module.exports = (config) => {
  config.set({
    babelrcFile: '.babelrc',
    coverageAnalysis: 'all',
    logLevel: 'warn',
    mutate: [
      'src/**/*.js',
      '!src/**/__tests__/**/*.js'
    ],
    mutator: 'javascript',
    packageManager: 'yarn',
    reporter: [
      'clear-text',
      'dashboard',
      'progress'
    ],
    testRunner: 'jest',
    transpilers: ['babel']
  });
};