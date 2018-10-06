const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    devServer: {
      quiet: true,
    },
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
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
                  loader: 'style-loader'
                }, {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    localIdentName: '[path][name]__[local]--[hash:base64:5]'
                  }
                }, {
                  loader: 'less-loader',
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
        ),
        new OpenBrowserPlugin({
             url: 'http://localhost:8080' 
        }),
        new FriendlyErrorsWebpackPlugin(
           {
            compilationSuccessInfo: {
              messages: ['Hello Zack & Matthieu the application is runing at http://localhost:8080'],
              notes: ['Attention à bien push ! :)']
            },
            onErrors: function (severity, errors) {
              console.log(errors);
              console.log(severity);
            },
            clearConsole: true,

            additionalFormatters: [],
            additionalTransformers: []
           }
        )
    ]
}