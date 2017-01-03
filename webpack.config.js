'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

const applicationEntries = process.env.NODE_ENV === 'development'
    ? ['webpack-hot-middleware/client?reload=true']
    : [];

module.exports = {
    entry: ['./src/index.tsx'].concat(applicationEntries),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: '/',
        sourceMapFilename: '[name].[hash].js.map'
    },

    devtool: process.NODE_ENV == 'production'
        ? 'source-map'
        : 'inline-source-map',

    resolve: {
        extensions: [
            '',
            '.webpack.js',
            '.web.js',
            '.tsx',
            '.ts',
            '.js',
            '.json'
        ]
    },

    plugins: plugins,

    devServer: {
        historyApiFallback: {
            index: '/'
        }
    },

    module: {
        preLoaders: [loaders.tslint],
        loaders: [
            loaders.ts,
            loaders.tsx,
            loaders.html,
            loaders.css,
            loaders.svg,
            loaders.eot,
            loaders.woff,
            loaders.woff2,
            loaders.ttf,
            loaders.json
        ]
    },

    externals: {
        'react/lib/ReactContext': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true
    }

}