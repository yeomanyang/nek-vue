var utils = require('./utils')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction,
        extract: isProduction
    }),
    cssModules: {
        localIdentName: '[local]--[hash:base64:5]',
        camelCase: true
    },
    transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}