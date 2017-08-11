// webpack.config.babel.js

const isProd = process.env.NODE_ENV === 'production';
const WDS_PORT = 7000;

export default {
    entry: [
        './src/client/js',
    ],
    output: {
        filename: 'js/bundle.js',
        path: `${__dirname}/dist/client/`,
        publicPath: isProd ? `/` : `http://localhost:${WDS_PORT}/`,
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
        ],
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: WDS_PORT,
    },
}
