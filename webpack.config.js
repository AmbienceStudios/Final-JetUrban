var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //Your config here (entry, module, resolve, etc.)
    devServer: {
        contentBase: './src' //Or any other path you build into
    },
    plugins: [
        //other plugins if any
        new HtmlWebpackPlugin({
            template: './index.template.html', //your template file
            filename: 'index.html',
            inject: 'body'
        })
    ]
};