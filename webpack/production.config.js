const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./partials/core.config.js');


const config = merge(
  common,
  {
    devtool: null,
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // Remove unreachable code.
          dead_code: true,
          // Don't bother supporting IE 8.
          screw_ie8: true,
          // Suppress warning during uglification.
          warnings: false,
        },
      }),
    ],
  }
);


module.exports = config;
