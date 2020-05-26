const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRequireFrom = require('webpack-require-from');

const prod = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    app: './src/part-2',
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[chunkhash:3].js',
    path: path.resolve('app/assets/part-2'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?url=false'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: false,
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new WebpackRequireFrom({
      variableName: 'window.__CONTEXT__.cdnUrl',
    }),
  ],
  mode: prod ? 'production' : 'development',
};

module.exports = config;
