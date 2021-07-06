<template>
  <div class="container">
    <router-view v-slot="{ Component }">
      <keep-alive v-if="$route.meta.cachedViews">
        <component :is="Component">
         
        </component>
      </keep-alive>
       <component v-else :is="Component">
         
        </component>
    </router-view>
    <tabbars />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, h } from 'vue';
import tabbars from '@/components/tabbars/index.vue';
import { useStore } from "vuex";
import { StateType as GlobalStateType } from '@/store/global';
interface DetailBasicPageSetupData {
  loading: boolean;
}
export default defineComponent({
  name: 'index',
  components: { tabbars },
  setup(): DetailBasicPageSetupData {
    const store = useStore<{global: GlobalStateType}>(); 
    console.log('store',store)
    const loading = ref<boolean>(true);
    onMounted(() => {
      loading.value = true;
    });
    return {
      loading: loading as unknown as boolean,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>