const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    // inform webpack building a bundle for node js,
    // rather than for the browser

    target: 'node',

    // tell webpack the root file for our
    // server application

    entry: './src/index.js',

    // tell webpack where to put output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};

module.exports = merge(baseConfig, config);
