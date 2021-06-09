function env() {
    const baseUrl = {
        dev: {
            rootUrl:'https://testapi.escase.cn',
            tskey:'tsxxxx'
        }, //接口域名 http://testapi.escase.cn
        prod: {
            rootUrl:'https://testapi.escase.cn',
            tskey:'qaxxxx'
        }
    }
    if (process.env.NODE_ENV == 'production') return baseUrl.prod
    return baseUrl.dev

}

export default env()
