/**
 * 接口封装方式.
 */
import axios from 'axios'
import qs from 'qs'

export default async (url = '', data = {}, type = 'GET', options = {}) => {
  type = type.toLowerCase()

  const config = {
    method: type,
    url: url
  }

  type === 'get'
    ? config.params = data
    : config.data = qs.stringify(data)

  for (let i in options) {
    config[i] = options[i]
  }
  console.log(config)
  const response = await axios(config).then(res => {
    return {
      success: true,
      res: res
    }
  }).catch(function (error) {
    return {
      success: false,
      code: error.response.status
    }
  })
  return response

  // if(response.status === 200){
  //   return response.data;
  //   if(response.data.status==-1){
  //
  //   }
  // }else if(response.state === 401){
  //   return null;
  // }else{
  //   return null;
  // }
}
