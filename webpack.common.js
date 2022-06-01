// The path to the CesiumJS source code
const cesiumSource = './node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/App.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    amd: {
        // Enable webpack-friendly use of require in Cesium
        toUrlUndefined: true
    },
    resolve: {
        alias: {
            cesium: path.resolve(__dirname, cesiumSource)
        },
        mainFiles: ['index', 'Cesium']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/tample.html')
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, './static') },
                { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
                { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
                { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' }
            ]
        },),
        new webpack.DefinePlugin({
            // Define relative base path in cesium for loading assets
            CESIUM_BASE_URL: JSON.stringify('')
        })
    ],

    devServer: {
        static:'./static'
    },

    module: {
        rules: [

            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            {
                test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
                use: [ 'url-loader' ]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                    [
                        'babel-loader'
                    ]
            },
            {
                test: /\.data$/,
                exclude: /node_modules/,
                use:
                    [
                        'raw-loader'
                    ]
            },
            {
                test: /\.css$/,
                use:
                    [
                        'style-loader',
                        'css-loader'
                    ]
            },
        ]
    },
};