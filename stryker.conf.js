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
    packageManager: 'yarn',
    reporter: ['clear-text', 'progress'],
    testRunner: 'jest',
    transpilers: ['babel']
  });
};
