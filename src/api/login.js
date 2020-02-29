import request from '../utils/requeset'

export function login(data){
  return request({
    url: '/login',
    method: 'post',
    data
  })
}