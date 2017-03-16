'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = {
    entry: './src/showcase.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/',
        sourceMapFilename: '[name].[hash].js.map'
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