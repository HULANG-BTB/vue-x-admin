module.exports = [
  {
    enable: true, // 是否启用
    type: 'post', // 请求类型
    url: /^\/dept\/page/, // 请求地址
    response: options => {
      // 响应
      console.log(123)
      return { a: 'a' }
    }
  }
]
