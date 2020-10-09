const settings = require('./src/config/system')

const name = settings.title || 'vue X Admin' // page title

module.exports = {
  devServer: {
    port: 9528,
    open: true
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    name: name
  }
}
