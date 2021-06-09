import axios from 'axios';
import webconfig from '../webconfig'
import SingleLogin from './login'

import qs from 'qs';
import routers from '@/router/index'
// axios.defaults.baseURL = webconfig.rootUrl;
import {store,key} from '../store'
console.log(store.getters.getToken);
axios.defaults.withCredentials = false

const $http = async(url = '', type = 'GET', data = {}, _config = {}, _vue = {}) => {
    let _LoginManager = SingleLogin.getInstance()
    let token = await _LoginManager.getToken()
    return new Promise((resolve, reject) => {
        type = type.toUpperCase()
        const config:any = Object.assign(_config, { method: type, url, data:{} })
        let headers = {
            "Authorization": token,
            'X-Requested-With': 'XMLHttpRequest',
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
                // "Content-Type": "application/json; charset=utf-8"
        }
        if (['GET', 'DELETE'].includes(type)) { config.params = qs.stringify(data) } else { config.data = qs.stringify(data) }
        Object.assign(config, { headers })
        axios(config).then(async (response:any) => {
            
            /*拦截请求成功数据 全局处理 项目状态
            项目维护中 = 300002,
            项目未上线 = 300003,
            项目已下线 = 300004,
            授权码已失效 = 300006
            登录状态失效 = 300007,*/
            let errCode = response.data.ReturnCode
            if (errCode == 300007) {
                // debugger
                // token失效返回中间页
                let _manager = SingleLogin.getInstance()
                _manager.clearToken()
                await _manager.getToken()
                routers.replace({ path: "/index" })

                return
            }

            if (errCode === 300002) {
                routers.replace({ path: "/repair" })
                return
            }
            if (errCode === 300003) {
                routers.replace({ path: "/notOnLine" })
                return
            }
            if (errCode === 300004) {
                routers.replace({ path: "/end" })
                return
            }
            //活动火爆
            if (errCode === 300005) {
                routers.replace({ path: "/public400" })
                return
            }
            resolve(response.data)
        }).catch(err => reject(err))
    })
}

// 项目维护中 = 300002,
// 项目未上线 = 300003,
// 项目已下线 = 300004,
// 登录状态失效 = 300007,



export const $get = (url:any, data:Object, _config:any, _vue:any) => {
    return $http(url, 'GET', data, _config, _vue)
}

export const $post = (url:any, data:Object, _config:any, _vue:any) => {
    return $http(url, 'POST', data, _config, _vue)
}

export const $delete = (url:any, data:Object, _config:any, _vue:any) => {
    return $http(url, 'DELETE', data, _config, _vue)
}

export const $put = (url:any, data:Object, _config:any, _vue:any) => {
    return $http(url, 'PUT', data, _config, _vue)
}