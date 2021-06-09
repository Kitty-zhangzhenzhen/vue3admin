/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.js'
declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    $get: $get;
    $post: $post;
    $delete: $delete;
    $put: $put;
    $urls: any;
    $Message: any;
    $Modal: any;
  }
  
}
// import { ComponentCustomProperties } from 'vue'
// import { Store } from 'vuex'

// declare module '@vue/runtime-core' {
//   // Declare your own store states.
//   interface State {
//     count: number
//   }

//   interface ComponentCustomProperties {
//     $store: Store<State>
//   }
// }