<template> 
  <div class="container">
      
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, h } from 'vue';
import { useStore } from 'vuex';

interface DetailBasicPageSetupData {
  loading: boolean;
}

export default defineComponent({
  name: 'user',
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