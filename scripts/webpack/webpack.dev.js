'use strict'

const merge = require('webpack-merge')
const base = require('./webpack.base')
const config = require('../config')

const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: config.devServer.host,
    port: config.devServer.port,
    open: true
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerHost: config.analyzer.host,
      analyzerPort: config.analyzer.port
    }),
    new HtmlWebpackPlugin({
      template: `${config.src}/index.html`,
      filename: './index.html'
    }),
  ]
})
