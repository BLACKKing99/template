import LHttp from './Axios'

const http = new LHttp({
  baseURL: '/api',
  timeout: 10000
})

export default http
