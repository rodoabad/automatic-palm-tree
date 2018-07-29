module.exports = (config) => {
  config.set({
    babelrcFile: '.babelrc',
    coverageAnalysis: 'off',
    mutate: ['src/**/*.js'],
    mutator: 'javascript',
    packageManager: 'yarn',
    reporter: ['clear-text', 'progress'],
    testRunner: 'jest',
    transpilers: ['babel']
  });
};
