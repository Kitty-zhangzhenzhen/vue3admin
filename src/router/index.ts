import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import {store,key} from '../store'
import Index from '../views/index/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to:any, from:any, next:any) => {
  // console.log(to.meta.keepAlive)
  // console.log(from)
  // console.log(store)
  // if(to.meta.keepAlive){
  //   if(store.state.keepLiveRoute.indexOf(to.name)==-1){
  //     (store.dispatch as any).setKeep(to.name)
  //   }
  //   console.log(store)
  // }
  next()
  
})
export default router
