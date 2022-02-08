module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  
  devServer: {
    open: process.platform === 'darwin',
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
  },
}
