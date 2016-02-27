'use strict';

const join = require('path').join;

module.exports = {
  entry: join(__dirname, 'script.js'),

  output: {
    filename: 'bundle.js',
    path: __dirname,
  },

  devtool: 'source-map',

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  module: {
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ]
  }
};
