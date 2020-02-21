import Qs from 'qs'
import axios from 'axios'
import {Message} from 'element-ui'

// 封装路由拦截器
// export let axios = Axios.create({
//   headers: {
//     // "content-type": "application/x-www-form-urlencoded",
//     'Authorization':window.sessionStorage.getItem('token')//指令
//   },
//    baseURL: ""
// });

axios.interceptors.request.use(config => {
  return config;
}, err => {
  Message.error({message: '请求超时!'});
})
axios.interceptors.response.use(data => {
  if (data.status && data.status == 200 && data.data.status == 500) {
    Message.error({message: data.data.msg});
    return;
  }
  if (data.data.msg) {
    Message.success({message: data.data.msg});
  }
  return data.data;
}, err => {
  if (err.response.status == 504 || err.response.status == 404) {
    Message.error({message: '服务器被吃了⊙﹏⊙∥'});
  } else if (err.response.status == 403) {
    Message.error({message: '权限不足,请联系管理员!'});
  } else if (err.response.status == 401) {
    Message.error({message: err.response.data.msg});
  } else {
    if (err.response.data.msg) {
      Message.error({message: err.response.data.msg});
    }else{
      Message.error({message: '未知错误!'});
    }
  }
})

let base = 'http://localhost:8080';
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: Qs.stringify(params),
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  });
}
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  });
} 
export const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  });
}
export const getRequest = (url) => {
  return axios({
    method: 'get',
    url: `${base}${url}`
  });
}