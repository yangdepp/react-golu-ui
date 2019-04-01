const HTMLWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config')

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    example: './example.tsx',
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'GOLU-UI',
      template: 'example.html'
    })
  ],
})