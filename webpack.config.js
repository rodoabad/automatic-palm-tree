const path = require('path');

module.exports = {
  entry: './app/index.js',
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
};
