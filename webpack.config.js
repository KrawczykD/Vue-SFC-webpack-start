// const path = require('path');

// module.exports = {
//   entry: './src/entrypoint.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.js',
//     clean: true,
//   }
// };

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/entrypoint.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader , "css-loader"],
      },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({filename: 'main.css'}),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true
  },
};