module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5005',
        changeOrigin: true,
      },
    },
  },
};
