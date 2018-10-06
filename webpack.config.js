const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
                include: /src/,
                loader: require.resolve('babel-loader'),
                options: {

                  cacheDirectory: true,
                  plugins: [
                    ['import', { libraryName: "antd", style: true }]
                  ],
                },
              },
              {
                test: /\.less$/,
                use: [{
                  loader: 'style-loader' // creates style nodes from JS strings
                }, {
                  loader: 'css-loader', // translates CSS into CommonJS
                  options: {
                    modules: true,
                    localIdentName: '[path][name]__[local]--[hash:base64:5]'
                  }
                }, {
                  loader: 'less-loader', // compiles Less to CSS
                  options: {
                    sourceMap: true,
                    javascriptEnabled: true
                                  }
                }]
              },
              {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                  ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
                inject: true,
                template: './public/index.html'
            }
        )
    ]
}