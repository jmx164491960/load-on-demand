/**
 * Created by qyc on 2019/4/9.
 *用户所有的接口均在这里调用
 */
import fetch from '../config/fetch'
import {baseUrl} from '../config/env'

async function getData () {
  let options = {
      headers: {
        Authoration: 'abcdefg'
      }
    }, otherConfig = {}
  if (arguments[3]) {
    // 这里写授权或者追加请求头的逻辑
    options = {...options, ...otherConfig}
  }
  console.log(options)

  let response = await fetch(arguments[0], arguments[1], arguments[2], options)

  if (response.success) {
    switch (response.data.status) {
      case 1:
        console.log('数据返回成功')
        break
      case 2:
        console.log('需要授权登录')
        break
    }
    return response.data
  } else {
    throw new Error('接口调用出错，状态码' + response.code)
  }
}

let login // 用户接口;

login = (params) => getData(baseUrl + '/allPlatform/listProducts', params, 'POST', {needAuth: true, authType: 1})

export {
  login
}
