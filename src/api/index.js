const apiFiles = require.context('.', false, /.js$/)

const excludes = ['./index.js']

const apiInfo = apiFiles
  .keys()
  .filter(key => excludes.indexOf(key) === -1)
  .map(fileName => ({
    category: apiFiles(fileName).category,
    config: apiFiles(fileName).default
  }))

const apiConfig = apiInfo.map(item => item.config).flat(1)

export { apiInfo }
export default apiConfig
