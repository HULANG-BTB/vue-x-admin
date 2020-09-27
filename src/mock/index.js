import Mock from 'mockjs'

// 自动引入
const files = require.context('./modules', false, /.js$/)
files.keys().forEach(fileName => {
  Object.values(files(fileName).default).forEach(config => {
    config.enable !== false && Mock.mock(config.url, config.type || 'get', config.response)
  })
})
