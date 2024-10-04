const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',  // Cambiado a 'production' para minificar el código automáticamente

    scripts: {
        "test": "echo \"Error: No test specified\" && exit 1",
        "build": "webpack --config webpack.prod.js",
        "build:dev": "webpack --config webpack.config.js",
        "start": "webpack serve --config webpack.config.js --open --port=8080"
    },

    output: {
        clean: true,
        filename: '[name].[contenthash].js', // Archivo JS con hash para evitar problemas de caché
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /style.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /style.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,   // Aplica a archivos .js o .mjs
                exclude: /node_modules/,  // Excluye la carpeta node_modules
                use: {
                    loader: "babel-loader",  // Usa babel-loader para transpilar los archivos
                    options: {
                        presets: ['@babel/preset-env']  // Usa el preset @babel/preset-env
                    }
                }
            }
        ],
    },

    optimization: {
        minimize: true,  // Habilitar la minimización de archivos
        minimizer: [new TerserPlugin()],  // Usar TerserPlugin para minificar JS
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css', // Archivo CSS con hash
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/' },
            ],
        }),
    ],
};
