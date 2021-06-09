// import {getToken,getTestToken,checkLogin} from '@/api/login/api'
import { getParamsBydecodeURI } from '../util/util'
import webconfig from '../webconfig'
import { getTestToken, getToken, getAuthorizationCode } from '@/api/api'
import routers from '@/router/index'
import axios from 'axios';
import app from '@/main'

class SingleLogin {
    private isDev:Boolean=false
    private openId:string=''
    private _resolve:any=''
    private _check:any=''
    private token:string=''
    private callbacks:any=[]
    private auth:any=''
    private path:any=''
    private static instance:SingleLogin
    
    static getInstance() {
        if (!this.instance) {
            this.instance = new SingleLogin()
        }
        return this.instance
    }
    
    getToken() {
        return new Promise(async(resolve, reject) => {
            this.callbacks.push(resolve)
            console.log(process.env.NODE_ENV)
            if (process.env.NODE_ENV == 'development' || this.isDev) {
                if (SingleLogin.getInstance().token) {
                    
                    resolve(SingleLogin.getInstance().token)
                    return
                }
                let token = await this._getTestToken();
              
               
                this.token = token
                resolve(SingleLogin.getInstance().token)
            } else {
                if (SingleLogin.getInstance().token) {
                    resolve(SingleLogin.getInstance().token)
                } else {
                    let localToken = localStorage.getItem('token')

                    if (localToken) {
                        this.token = localToken
                      
                        resolve(SingleLogin.getInstance().token)
                    } else {
                        let AuthorizationCode = getParamsBydecodeURI('AuthorizationCode')
                        alert(window.location.href)
                        if (AuthorizationCode) {
                            let token = await this._exchangeToken(AuthorizationCode)
                            localStorage.setItem('token', token)
                           
                            this.token = token
                            resolve(SingleLogin.getInstance().token)
                        } else {
                            this._yhLogin()
                            reject()
                        }
                    }
                    resolve(SingleLogin.getInstance().token)
                }
            }
        })
    }

    async _getTestToken() {
        // let param ={"OpenId": ""}
        let param = { 'OpenId': '' }

        let url = `${getTestToken}`
        let res:any = await this._request(url, 'POST', param)
        if (res.Success) {
            this.openId = res.Data.OpenId
            localStorage.setItem('openId', res.Data.OpenId)
            localStorage.setItem('token', res.Data.Token)
            return res.Data.Token
        }
    }

    async _exchangeToken(code:String) {
        let param = { AuthorizationCode: code }
        let url = `${getToken}`
        let res:any = await this._request(url, 'POST', param)
        if (res.Success) {
            this.openId = res.Data.OpenId
            localStorage.setItem('openId', res.Data.OpenId)
            return res.Data.Token
        }

        if (res.ReturnCode == 300006) { // 授权码失效
            this.clearToken()
            this._yhLogin()
        }
    }

    public _yhLogin() {
        // let url = `${webconfig}${getAuthorizationCode}?pageUrl=${encodeURIComponent(location.href.split('#')[0])}`
        let url = `${getAuthorizationCode}?pageUrl=${encodeURIComponent(location.href)}`
      
        if (confirm(url)) {
            window.location.replace(url)
        }
    }
    public async _request(url = '', type = 'GET', data:any, _config = {}, _vue = {}) {
            return new Promise((resolve, reject) => {
                axios({
                    method: type,
                    url,
                    params: data,
                    data: data,
                    timeout: 10000,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(
                    (response:any) => {
                        resolve(response.data)
                    }
                ).catch(
                    (res:any) => {
                        reject(res)
                    }
                )
            })
        }
    

    public clearToken() {
        this.token = ''
        localStorage.removeItem('token')
    }
}
export default SingleLogin
