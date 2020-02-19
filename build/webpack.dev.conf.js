const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        port: 8080,
        open: true,
        hot: true,
        hotOnly: true
    },
    optimization: {
        usedExports: true
    }
}

module.exports = merge(baseConfig, devConfig)