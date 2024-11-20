const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    },
    open: true,
    compress: true,
    port: 8080,
  },

  plugins: [
    new PugPlugin({
      entry: {
        // define page templates
        indexUI: 'src/pages/indexUI.pug' //=> dist/indexUI.html
      },
      js: {
        // JS output filename
        filename: 'js/[name].[contenthash:8].js',
      },
      css: {
        // CSS output filename
        filename: 'css/[name].[contenthash:8].css',
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: ['css-loader'/*, 'sass-loader'*/],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(ttf|woff|woff2|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]',
        },
      },
    ],
  },
};



