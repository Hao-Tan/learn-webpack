const path = require('path');

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "index.js",
        path: path.join(__dirname, "/dist")
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    limit: 20480
                }
            }
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
        }]
    }
}