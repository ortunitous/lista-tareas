const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProduction ? 'production' : 'development',

    output: {
        clean: true,  // Limpia la carpeta 'dist' antes de cada build
        filename: 'main.[contenthash].js',  // Utiliza un hash único para los archivos JS para evitar problemas de caché
    },

    optimization: {
        minimize: isProduction,  // Minimiza solo en producción
        minimizer: isProduction ? [
            new CssMinimizerPlugin(),  // Minimiza los archivos CSS
            new TerserPlugin(),  // Minimiza los archivos JS
        ] : [],
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
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',  // Usa MiniCssExtractPlugin en producción, style-loader en desarrollo
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',  // Maneja imágenes como recursos
            },
            {
                test: /\.js$/,  // Asegúrate de usar Babel para transpirar JavaScript moderno
                exclude: /node_modules/,  // Evita procesar archivos de node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',  // Nombre del archivo CSS con hash para evitar problemas de caché
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/' },  // Copia los assets a la carpeta de salida
            ],
        }),
    ],

    devServer: {
        static: './dist',
        hot: true,  // Habilitar Hot Module Replacement en desarrollo
        historyApiFallback: true,  // Asegura que el fallback funcione para Single Page Applications (SPA)
    },
};
