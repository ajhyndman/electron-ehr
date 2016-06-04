const path = require('path');
const webpack = require('webpack');


const sourceDir = path.join(__dirname, 'src');
const buildDir = path.join(__dirname, 'build');


const config = {
  devtool: 'eval',
  entry: path.join(sourceDir, 'app'),
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
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
            'es2015', 'react',
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
    root: [sourceDir],
    extensions: [
      '',
      '.js',
      '.json',
      '.jsx',
    ],
  },
};


module.exports = config;
