const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'server', 'public'),
  },
  module: {
    rules: [
      { test: /.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
