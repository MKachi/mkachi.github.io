'use strict'

const config = require('../config')

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')


const eslintRule = () => ({
  test: /\.(js|jsx|ts|tsx)$/,
  enforce: 'pre',
  loader: 'eslint-loader',
  include: [config.src],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.showLintError
  }
})

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: `${config.src}/App.tsx`
  },
  output: {
    path: config.out,
    filename: './[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [{
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      }, {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }, {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: `${config.out}/assets/images/[hash].[ext]`,
          limit: 10000
        }
      }, {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        loader: 'url-loader',
        options: {
          name: `${config.out}/assets/fonts/[hash].[ext]`,
          limit: 10000
        }
      }, {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader',
        options: {
          name: `${config.out}/assets/videos/[hash].[ext]`,
          limit: 10000
        }
      }, {
        test: /\.(ogg|mp3|wav|flac|aac)$/,
        loader: 'url-loader',
        options: {
          name: `${config.out}/assets/audios/[hash].[ext]`,
          limit: 10000
        }
      },
      ...(config.useLint ? [eslintRule()] : [])
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['build']
    }),
    new CopyWebpackPlugin([{
      from: `${config.src}/assets`,
      to: `${config.out}/assets`,
      flatten: true
    }])
  ]
}
