const HTMLWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config')

module.exports = Object.assign({}, base, {
  mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
      title: 'GOLU-UI',
      template: 'index.html'
    })
  ],
})