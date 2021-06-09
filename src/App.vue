<template>

  <!-- <keep-alive :include="cachedViews">
      
    <router-view></router-view>
  </keep-alive>
  <div>{{cachedViews}}</div> -->
  <router-view v-slot="{ Component }">
    <keep-alive :include="cachedViews">
      <component :is="Component" >
        <p>缓存页面</p>
      </component>
    </keep-alive>
   
  </router-view>
</template>
<script lang="ts">
// declare function wxChooseImage(): void
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store/index";
import { onBeforeMount, onMounted, reactive, toRefs, ref, watch } from "vue";
interface DataProps {
  keepAlive: string[];
}
export default {
  components: {},
  setup(props: any, ctx: any) {
    const router = useRoute();
    const store = useStore(key);
     const cachedViews = store.state.keepLiveRoute;
    
    const data: DataProps = reactive({
      keepAlive: store.state.keepLiveRoute,
    });
    const refData = toRefs(data);
   
    onBeforeMount(() => {});
    onMounted(() => {
      console.log(cachedViews);
    });
    // watch(router, (newvalue, oldvalue) => {
    //     console.log(newvalue)
    //     console.log(store.gettters);
    //     let name = store.state.keepLiveRoute
    //     if (name.indexof(newvalue.name) == -1) {
    //         store.dispatch('setKeep', newvalue.name)
    //     }
    // });
    return {
      ...refData,
      cachedViews
    };
  },
};
</script>
<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>