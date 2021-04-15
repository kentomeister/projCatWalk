const path = require('path');

module.exports = {
  entry: './src/index.jsx',
<<<<<<< HEAD
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
       // test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
=======
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      { test: /.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
>>>>>>> caf825a08505707569f2bc2101e354f7253039ab
};
