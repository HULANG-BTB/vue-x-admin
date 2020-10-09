import axios from 'axios'

// xasios 实例
const $xaxios = {}

// axios 实例
let service = null

// 请求数据
const request = options => {
  options.method = options?.type

  // 扩展restful请求
  if (options.params) {
    Object.keys(options.params).forEach(key => {
      const regExp = new RegExp(`{${key}}`, 'g')
      if (regExp.test(options.url)) {
        options.url = options.url?.replaceAll(regExp, options.params[key])
        delete options.params[key]
      }
    })
  }

  return new Promise((resolve, reject) => {
    service?.(options)
      .then(res => resolve(res))
      .catch(error => reject(error))
  })
}

const register = options => {
  options.forEach(api => {
    if (!api.method) {
      console.warn(`URL: ${api.url}的接口注册未填写method属性，请检查接口配置文件！`)
    } else if ($xaxios[api.method]) {
      console.warn(`存在重名的接口方法注册(method: ${api.method})，请检查接口配置文件！`)
    } else {
      $xaxios[api.method] = options => {
        const { url, data, params, type } = api
        options = Object.assign({}, { method: type || 'get', url, data, params }, options)
        return request(options)
      }
    }
  })

  // 具名请求
  const methods = ['get', 'post', 'put', 'delete', 'request', 'head', 'patch']
  methods.forEach(method => {
    $xaxios[method] = options => {
      options = Object.assign({}, options, { method })
      return request(options)
    }
  })
}

export default {
  install: (app, options) => {
    const { interceptors, api, config, alias } = options

    service = axios.create(config)

    // 添加请求拦截器
    service.interceptors.request.use(
      config => {
        interceptors?.request?.(config)
        return config
      },
      error => {
        interceptors?.requestError?.(error)
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    service.interceptors.response.use(
      response => {
        interceptors?.response?.(response)
        return response
      },
      error => {
        interceptors?.responseError?.(error)
        return Promise.reject(error)
      }
    )

    // 注册接口
    api && register(api)

    // 是否启用别名
    if (alias) {
      app.config.globalProperties[alias] = $xaxios
    } else {
      app.config.globalProperties.$xaxios = $xaxios
    }
  }
}
