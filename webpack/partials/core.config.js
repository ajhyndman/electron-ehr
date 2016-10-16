const path = require('path');
const webpack = require('webpack');

const rootDir = path.join(__dirname, '../..');
const buildDir = path.join(__dirname, '../../build');
const sourceDir = path.join(__dirname, '../../src');


const config = {
  devtool: 'eval',
  entry: path.join(sourceDir, 'App'),
  target: 'electron',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: [
            'transform-flow-strip-types',
          ],
          presets: [
            'es2015',
            'stage-2',
          ],
        },
      },
      // Handle importing JSON files.
      {
        test: /\.json$/,
        loader: 'json',
      },
      // Parse JSX syntax only in files with the .jsx extension
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'react',
            'stage-2',
          ],
        },
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: buildDir,
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
  ],
  resolve: {
    root: [rootDir],
    modulesDirectories: ['src', 'node_modules'],
    extensions: [
      '',
      '.js',
      '.json',
      '.jsx',
    ],
  },
};


module.exports = config;
