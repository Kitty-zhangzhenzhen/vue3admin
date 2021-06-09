import webconfig from '@/webconfig'
export const getTestToken = webconfig.rootUrl+"/api/System/GetTestToken"
export const getToken = webconfig.rootUrl+"/Login/GetToken"

export const getAuthorizationCode = webconfig.rootUrl+"/Login/GetAuthorizationCode"
export const getOssKey = webconfig.rootUrl+"/api/Custom/GetOssKey"
export const ossUrl="https://oss.esurl.cn/"