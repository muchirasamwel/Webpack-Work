const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        hot:true,
        contentBase: path.join(__dirname, "./dist/"),
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html',
            filename: './index.html' //relative to root of the application
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insert: 'body'
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },

}