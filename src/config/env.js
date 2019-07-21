/**
 * 配置开发环境和线上环境的切换
 *
 * baseUrl:域名地址
 * routerMode:路由模式
 */

let baseUrl, // 域名地址
  routerMode// 路由模式

switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = ''
    routerMode = 'hash'
    break
  case 'testing':
    baseUrl = ''
    routerMode = 'hash'
    break
  case 'production':
    baseUrl = ''
    routerMode = 'hash'
    break
  default:
    baseUrl = ''
    routerMode = 'hash'
    break
}

export {
  baseUrl,
  routerMode
}
