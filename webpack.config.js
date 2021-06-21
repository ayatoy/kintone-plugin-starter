const path = require('path');
const KintonePlugin = require('@kintone/webpack-plugin-kintone-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    desktop: './src/desktop.js',
    mobile: './src/mobile.js',
    config: './src/config.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'plugin'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new KintonePlugin({
      manifestJSONPath: './plugin/manifest.json',
      privateKeyPath: './private.ppk',
      pluginZipPath: './dist/plugin.zip',
    }),
  ],
  target: ['web', 'es5'],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
