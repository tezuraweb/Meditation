const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/js/index.js',
        './src/css/style.scss',
    ],

    output: {
        path: path.resolve(__dirname, 'static/dist'),
        publicPath: '/dist/',
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer(),
                                ],
                            },
                            sourceMap: true
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer(),
                                ],
                            },
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            }
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
};