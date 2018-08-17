module.exports = (config) => {
  config.set({
    babelrcFile: '.babelrc',
    coverageAnalysis: 'off',
    logLevel: 'warn',
    mutate: [
      'src/**/*.js',
      '!src/**/__tests__/**/*.js'
    ],
    mutator: 'javascript',
    packageManager: 'npm',
    reporter: [
      'clear-text',
      'dashboard',
      'progress'
    ],
    testRunner: 'jest',
    transpilers: ['babel']
  });
};
