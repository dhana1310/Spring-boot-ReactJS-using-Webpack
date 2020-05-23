var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    //        entry: 'src/index.js',
    //    devtool: 'sourcemaps',
    //    cache: true,
    //    mode: 'development',
    
    //directory to place the output files
    output: {
        path: path.join(__dirname, '../resources/static'),
        filename: 'bundle.js'
    },
    devServer: {
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(json|ico|png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};