<template>
  <div class="container">
    <router-view v-slot="{ Component }">
        <component :is="Component">
          <p>缓存页面</p>
        </component>
    </router-view>
    <tabbars />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, h } from 'vue';
import tabbars from '@/components/tabbars/index.vue';
interface DetailBasicPageSetupData {
  loading: boolean;
}

export default defineComponent({
  name: 'index',
  components: { tabbars },
  setup(): DetailBasicPageSetupData {
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
<style lang="less" scoped>
</style>