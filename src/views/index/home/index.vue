<template>
  <div class="container">
    <div class="icon_list"></div>
    <div class="pro_list">
      <div class="pao_arr" v-for="item in proArray" :key="item.productId" @click="getDetail(item)" :style="{width:item.imageScale+'%'}">
        <img :src="item.productImageUrl"  alt="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, h, reactive,toRefs } from 'vue';
import { useStore } from "vuex";
import { StateType as GlobalStateType } from '@/store/global';
import { getProduct } from './service';
interface DataProps {
  loading: boolean;
  proArray: Object[];
}

export default defineComponent({
  name: 'home',
  setup() {
    const data: DataProps = reactive({
      loading: false,
      proArray: [],
    });
    const store = useStore<{global: GlobalStateType}>(); 
    const getpro = async () => {
      let res = await getProduct();
      data.proArray = res.data.productList;
    };
    const getDetail = (item: Object) => {
      console.log('obj');
    };
    const refData = toRefs(data);

    onMounted(() => {
      getpro();
      data.loading = true;
    });

    return {
      ...refData,
      getDetail
    };
  },
});
</script>
<style lang="scss" scoped>
.pro_list{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .pao_arr{
    // width: 50%;
    img{
      width: 100%;
    }
  }
}
</style>