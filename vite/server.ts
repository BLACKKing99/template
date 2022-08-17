import { ServerOptions } from 'vite'

export const server:ServerOptions = {
  host: '0.0.0.0',
  port: 8080,
  // open: true,
  proxy: {
    // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
    // 正则表达式写法
    '^/api': {
      target: '', // 后端服务实际地址
      changeOrigin: true, // 开启代理
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
