import { createStore,Store  } from 'vuex'
import { InjectionKey } from 'vue'
import state from './state'
import actions from './action'
import mutations from './mutations'
import createPersistedState from "vuex-persistedstate"

interface State{
  token: string;
  openid:string;
  keepLiveRoute:string[];
}
export const key: InjectionKey<Store<State>> = Symbol()
export const store= createStore<State>({
  state,
  mutations,
  actions,
  modules: {},
  getters:{
    getToken(state){
      return state.token
    },
    getRoute(state){
      return state.keepLiveRoute
    }
  },
  plugins: [createPersistedState({
    storage:window.sessionStorage
  })]
})
