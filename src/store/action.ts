export default {
    setToken (ctx:any, payload:any) {
        ctx.commit('setToken',payload)
    },
    setKeep(ctx:any,payload:any){
        ctx.commit('setKeep',payload)
    }
  }