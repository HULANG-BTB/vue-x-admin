import Cookies from 'js-cookie'

/**
 * 获取Cookies
 * @param {String} key
 * @param {Boolean} isJson
 * @returns {String | null}
 */
export function getCookies(key, isJson = false) {
  return Cookies.get(key, isJson)
}

/**
 * 设置Cookies
 * @param {String} key
 * @param {String} val
 * @param {Object} attributes
 * @returns {Boolean | undefined}
 */
export function setCookies(key, val, attributes = {}) {
  return Cookies.set(key, val, attributes)
}

/**
 * 移除cookies
 * @param {String} key
 * @returns {Boolean | undefined}
 */
export function removeCookies(key) {
  return Cookies.remove(key)
}
