export default {
    setToken (state:any, payload:any) {
      state.token = payload
    },
    clearKeep(state:any){
       state.keepLiveRoute=[]
    },
    setKeep(state:any,payload:any){
      state.keepLiveRoute.push(payload)
    }
  }