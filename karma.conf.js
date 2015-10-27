// Karma configuration
// Generated on Fri Sep 25 2015 01:02:47 GMT+0800 (中国标准时间)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],


        // list of files / patterns to load in the browser
        files: [
            'src/*.js',
            'src/**/*.js',
            'test/*_test.js'
        ],


        // list of files to exclude
        exclude: [
        ],

        webpack:{
            module: {
                loaders: [
                    { test: /\.vue$/, loader: 'vue' },
                    { test:/\.less$/, loader: 'style!css!less' }
                ]
            }
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/*.js':['webpack'],
            'src/**/*.vue':['webpack'],
            'test/*.js':['webpack']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        // inject error should add this;
        plugins: [
            require("karma-webpack"),
            require("karma-mocha"),
            require("karma-spec-reporter"),
            require("karma-chrome-launcher")
        ]
    })
}