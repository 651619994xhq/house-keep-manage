'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  BASE_URL:'""', //这里需要修改配置
  H5_BASE_URL:'"http://47.96.169.86:8081"'
})
