import Cookie from 'js-cookie'

export function getCookie(str, back) {
  return Cookie.get(str) || back
}

export function setCookie(str, token) {
  return Cookie.set(str, token)
}

export function removeCookie(str) {
  return Cookie.remove(str)
}