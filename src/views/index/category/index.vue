<template>
  <div class="container">
    <div class="cate_ul"></div>
    <div class="cate_content"></div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, h, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { getCategory } from './service';
interface DataProps {
  loading: boolean;
  category: Object[];
}

export default defineComponent({
  name: 'category',
  setup() {
    const data: DataProps = reactive({
      loading: false,
      category: [],
    });
    const refData = toRefs(data);
    const getCategorys = async () => {
      let res = await getCategory();
      data.category = res.categoryList;
      console.log(res)
    };
    onMounted(() => {
      getCategorys();
    });

    return {
      ...refData,
    };
  },
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
}
</style>