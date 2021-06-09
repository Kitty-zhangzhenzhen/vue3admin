import { createApp } from 'vue'
import {List,Toast,Picker,Dialog,Loading,PullRefresh,Popup} from 'vant';

import 'vant/lib/index.css';
import 'vant/lib/list/style';
import 'vant/lib/popup/style';
import { loadAllPlugins } from './plugins'
import App from './App.vue'
import router from './router'
import {store,key} from './store'
import '@/assets/common.scss'
import {
    $get,
    $post,
    $delete,
    $put
  } from './api/http'


const app=createApp(App);
// 加载所有插件
loadAllPlugins(app)

app.config.globalProperties.$get=$get;
app.config.globalProperties.$post=$post;
app.config.globalProperties.$delete=$delete;
app.config.globalProperties.$put=$put;
app.config.globalProperties.$Toast=Toast;
app.provide('$post', $post)
app.use(store,key).use(router).use(Loading).use(List).use(PullRefresh).use(Picker).use(Popup).mount('#app')
export default app