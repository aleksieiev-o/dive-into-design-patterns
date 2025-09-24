const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
	devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
			{
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
	optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
			new TerserPlugin()
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Index Page', 
        template: 'src/index.html' }),
		new MiniCssExtractPlugin({
      filename:"bundle.css"}),
		new CopyPlugin({
      patterns: [
        { from: "src/img", to: "img" }
      ]
    }),
   ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};