'use strict'

const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./webpack/webpack.prod')

const progress = ora('production build...')
progress.start()

webpack(config, (error, status) => {
  progress.stop()
  if (error) {
    throw error
  }

  if (status.hasErrors()) {
    console.log(chalk.red('Build failed\n'))
    process.exit(1)
  }
  console.log(chalk.cyan('Build complete\n'))
})
