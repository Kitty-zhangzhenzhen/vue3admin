import { createRouter, createWebHashHistory } from 'vue-router';
import { RoutesDataItem } from "@/utils/routes";

import SecurityLayout from '@/layouts/SecurityLayout.vue';

import IndexLayoutRoutes from '@/layouts/IndexLayout/routes';
import IndexLayout from '@/layouts/IndexLayout/index.vue';

import UserLayoutRoutes from '@/layouts/UserLayout/routes';
import UserLayout from '@/layouts/UserLayout/index.vue';


const routes: RoutesDataItem[] = [
  
  {
    title: 'empty',
    path: '/',
    component: SecurityLayout,
    children: [
      {
        title: 'empty',
        path: '/',
        redirect: '/home/workplace',
        component: IndexLayout,
        children: IndexLayoutRoutes
      },
    ]
  },  
  {
    title: 'empty',
    path: '/user',
    redirect: '/user/login',
    component: UserLayout,
    children: UserLayoutRoutes
  },
  {
    title: 'app.global.menu.notfound',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404/index.vue'),
  }
]



const router = createRouter({
    scrollBehavior(/* to, from, savedPosition */) {
      return { top: 0 }
    },
    history: createWebHashHistory(import.meta.env.BASE_URL),
    // routes:routes as any,
    routes: [
      {
        path: '/',
        name: 'index',
        redirect:'/home',
        component: () => import('@/views/index/index.vue'),
        children:[
          {
            path:'/home',
            name:'home',
            component: () => import('@/views/index/home/index.vue'),
            meta:{
              title:'首页',
              cachedViews:true
            }
          },
          {
            path:'/category',
            name:'category',
            component: () => import('@/views/index/category/index.vue'),
            meta:{
              title:'商品分类',
              cachedViews:true
            },
          },
          {
            path:'/shopCart',
            name:'shopCart',
            component: () => import('@/views/index/shopCart/index.vue'),
            meta:{
              title:'购物车',
              cachedViews:true
            },
          },
          {
            path:'/user',
            name:'user',
            component: () => import('@/views/index/user/index.vue'),
            meta:{
              title:'个人中心',
              cachedViews:true
            },
          }
        ]
      },
      {
        path:'/order',
        name:'order',
        component: () => import('@/views/order/index.vue'),
            meta:{
              title:'我的订单',
              cachedViews:true
            },
      }
    ],
  });
  
export default router;