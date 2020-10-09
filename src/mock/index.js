import Mock from 'mockjs'

const modulesFiles = require.context('./modules', false, /\.js$/)

const mocks = modulesFiles
  .keys()
  .reduce((mocks, modulePath) => {
    const value = modulesFiles(modulePath)
    mocks.push(...value)
    return mocks
  }, [])
  .filter(item => item.enable)

mocks.forEach(mock => {
  console.log(mock.url)
  console.log(Mock.mock(mock.url, mock.type, mock.response))
})

export default mocks
