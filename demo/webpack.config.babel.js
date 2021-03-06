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
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader', },
                    { loader: 'css-loader', },
                    { loader: 'less-loader', },
                ],
            },
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          react: `${__dirname}/node_modules/react`,
        },
    },
    devServer: {
        port: WDS_PORT,
    }
}
