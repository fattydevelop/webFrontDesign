var vue = require('vue-loader')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: './build/build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    optional: ['runtime'],
                    stage: 0
                }
            },
            {
                test: /\.vue$/,
                loader: vue.withLoaders({
                    // apply babel transform to all javascript
                    // inside *.vue files.
                    js: 'babel-loader?optional[]=runtime&stage=0'
                })
            },
            { test:/\.less$/, loader: 'style!css!less' }

        ]
    },
    devtool: 'source-map'
}