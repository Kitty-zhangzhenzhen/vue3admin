import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import {store,key} from '../store'
import Index from '../views/index/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'pageIndex',
    redirect:'/home',
    component: () => import(/* webpackChunkName: "pageIndex" */ '../views/pageIndex/index.vue'),
    children:[
      {
        path:'/home',
        name:'home',
        component: () => import(/* webpackChunkName: "pageIndex" */ '../views/home/index.vue'),
      },
      {
        path:'/category',
        name:'category',
        component: () => import(/* webpackChunkName: "category" */ '../views/category/index.vue'),
      },
      {
        path:'/shopCart',
        name:'shopCart',
        component: () => import(/* webpackChunkName: "shopCart" */ '../views/shopCart/index.vue'),
      },
      {
        path:'/user',
        name:'user',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/index.vue'),
      }
    ]
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
