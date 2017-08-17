// webpack.config.babel.js

export default {
    entry: [
        `${__dirname}/src/js`,
    ],
    output: {
        filename: 'js/index.js',
        path: `${__dirname}/lib/`,
        publicPath: `/`,
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          react: `${__dirname}/node_modules/react`,
        },
    }
}
