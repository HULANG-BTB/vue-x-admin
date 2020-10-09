module.exports = {
  /**
   * @type {string} title
   * @description 页面标题
   */
  title: '页面标题',

  /**
   * @type {boolean} true | false
   * @description 是否固定头部
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description 是否显示侧边栏的LOGO
   */
  sidebarLogo: true,

  /**
   * @type {string} tokenKey
   * @description Cookie中存储token的key值
   */
  token: {
    /**
     * token存储时的key值
     */
    key: 'Auth',
    /**
     * token过期时间 设置remember_me时生效
     */
    expires: 1
  }
}
