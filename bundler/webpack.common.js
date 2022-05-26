const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');


module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/App.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/tample.html')
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
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
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource'
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