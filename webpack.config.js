const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;

console.log(NODE_ENV);

let config = {
    context: __dirname + '/WebPC/src/js',
    entry: {
        bundle: './app.js',
        vendor: ['react', 'react-dom', 'prop-types', 'react-router', 'lodash', 'jquery', 'redux', 'react-redux', 'react-router-redux', 'mockjs'],
        test: './test.js'
    },
    output: {
        path: __dirname + '/WebPC/dist/js',
        publicPath: '/WebPC/dist/js',
        filename: '[name].js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: []
    }
};

let rules = [
    {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader"
    },
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
    },
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
            loader: "babel-loader",
            options: { presets: ["es2015", "react"] }
        }]
    }
];

let plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',  
        filename: 'vendor.js'
    })
];

if (NODE_ENV === 'development') {
    plugins.push(
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    );
} else if (NODE_ENV === 'production') {
    plugins.push(
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    );
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

config.module.rules = rules;
config.plugins = plugins;

module.exports = config;