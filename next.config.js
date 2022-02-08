module.exports = {
  reactStrictMode: true,
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: path.resolve(__dirname, "src/"),
              outputPath: "dist/",
              publicPath: "../",
              useRelativePaths: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "dist/[name].bundle.css",
      allChunks: true,
    }),
  ],
};
