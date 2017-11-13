var utils = require('./utils')
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.conf.js');
var components = require('../components.json');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    entry: components,
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        filename: '[name]/index.js',
        // 公开出来的包名
        library: 'nek-vue',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: utils.styleLoaders({
            sourceMap: false,
            extract: true
        })
    },
    // 不将vue打包到bundle，在运行时再去从外部获取
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});
