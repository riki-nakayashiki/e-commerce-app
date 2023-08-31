const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Output bundle file name
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Use Babel for .js and .jsx files
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Use this HTML file as a template
        }),
    ],
    devServer: {
        historyApiFallback: true, // 모든 요청을 index.html로 리다이렉션하여 브라우저 라우팅 처리
      },
};