import { getCookies, setCookies, removeCookies } from '@utils/cookies'
import Config from '@/config/system'

const TokenKey = Config.token.key

/**
 * 获取token
 * @returns {String|null}
 */
export function getToken() {
  return getCookies(TokenKey)
}

/**
 * 设置token
 * @param token
 * @param remember
 * @returns {Boolean|undefined}
 */
export function setToken(token, remember) {
  if (remember) {
    return setCookies(TokenKey, token, { expires: Config.token.expires })
  } else {
    return setCookies(TokenKey, token)
  }
}

/**
 * 移除token
 * @returns {Boolean|undefined}
 */
export function removeToken() {
  return removeCookies(TokenKey)
}
