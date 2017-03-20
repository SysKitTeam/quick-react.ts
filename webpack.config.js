'use strict';

const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = {
    entry: {
        Ribbon: "./examples/src/Ribbon.tsx",
        Dropdown: "./examples/src/Dropdown.tsx",
        Button: "./examples/src/Button.tsx",
        CompactServer: "./examples/src/CompactServer.tsx",
        TagContainer: "./examples/src/TagContainer.tsx",
        BarChart: "./examples/src/BarChart.tsx",
        AddToFavorites: "./examples/src/AddToFavorites.tsx",
        Callout: "./examples/src/Callout.tsx",
        MainNavigation: "./examples/src/MainNavigation.tsx",
        MessageBar: "./examples/src/MessageBar.tsx",
        Pivot: "./examples/src/Pivot.tsx",
        Dialog: "./examples/src/Dialog.tsx",
        Search: "./examples/src/Search.tsx",
        Icon: "./examples/src/Icon.tsx",
        Breadcrumbs: "./examples/src/Breadcrumbs.tsx",
        LeftNavigation: "./examples/src/LeftNavigation.tsx",
        ContextualMenu: "./examples/src/ContextualMenu.tsx",
        Checkbox: "./examples/src/Checkbox.tsx",
        ChoiceGroup: "./examples/src/ChoiceGroup.tsx",
        ToggleSwitch: "./examples/src/ToggleSwitch.tsx",
        Slider: "./examples/src/Slider.tsx",
        Label: "./examples/src/Label.tsx",
        TextField: "./examples/src/TextField.tsx",
        Spinner: "./examples/src/Spinner.tsx",
        CheckboxList: "./examples/src/CheckboxList.tsx",
        Treeview: "./examples/src/Treeview.tsx",
        StatusBar: "./examples/src/StatusBar.tsx",
        Dashboard: "./examples/src/Dashboard.tsx",
        ServerTile: "./examples/src/ServerTile.tsx",       
        ProgressBar: "./examples/src/ProgressBar.tsx",   
        History: "./examples/src/History.tsx",                     
        PieChart: "./examples/src/PieChart.tsx",
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
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

    plugins: [
         new webpack.optimize.CommonsChunkPlugin({
             name: "Common", 
             filename : "Common.js"           
         })
    ].concat(plugins),

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