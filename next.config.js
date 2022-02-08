module.exports = {
  reactStrictMode: true,
  module: {
    rules: [
      {
        use: [
          {
            options: {
              publicPath: "../",
              useRelativePaths: true,
            },
          },
        ],
      },
    ],
  },
};
