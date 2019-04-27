const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const base = require('./webpack.config');
module.exports = Object.assign({}, base, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'doc')
  },
  entry: {
    example: './example.tsx'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'GOLU',
      template: 'example.html',
      filename: 'example.html'
    })
  ]
});
