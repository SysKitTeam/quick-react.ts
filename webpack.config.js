'use strict';

const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = {
    entry: {
        Dashboard: "./examples/src/Dashboard.tsx",
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        publicPath: '/',
        sourceMapFilename: '[name].[hash].js.map'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    devtool: 'source-map',
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

    module: {
        preLoaders: [loaders.tslint],
        loaders: [
            loaders.ts,
            loaders.html,
            loaders.css,
            loaders.json,
            loaders.svg,
            loaders.eot,
            loaders.woff,
            loaders.woff2,
            loaders.ttf,         
        ]
    },

    externals: {
        'react/lib/ReactContext': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true
    }

}
