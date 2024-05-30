const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const envParser = require('node-env-file');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const VERSION = require('./package.json').version;

module.exports = function() {

  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'RoninPlugin.js',
      path: path.join(__dirname, '../assets/scripts')
    },
    plugins: [
      new NodePolyfillPlugin({
        excludeAliases: ['console']
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ],
  };
};

