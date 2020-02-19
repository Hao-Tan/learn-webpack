const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map'
}

module.exports = merge(baseConfig, prodConfig)