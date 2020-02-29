import axios from 'axios'
const service = axios.create({
  baseURL: 'http://localhost:7001',
  timeout: 1800000
})

service.interceptors.request.use(
  config => {
    console.log(config)
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    console.log(response)
    return response
  },
  error => {
    let errMsg = '';
    const errCode = error.response.headers['x-error-code'];
    const msg = error.response.headers['msg']
    console.log(error.response)
    return Promise.reject('error')
  }
)

export default service