<template>
  <div class="container">
    <div class="cate_ul">
      <div v-for="(item,index) in category" class="cate_li" :class="index==currentCateIndex?'active':''" @click="toggleCate(item,index)" :key="item.categoryId">{{
        item.categoryName
      }}</div>
    </div>
    <div class="cate_content">
      <div class="currentCate" v-for="item in currentCate" :key="item.categoryId">
        <img :src="item.categoryImageUrl" class="currentCate_img" alt="" />
        <div class="currentCate_name">{{ item.categoryName }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, h, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { getCategory } from './service';
interface DataProps {
  loading: boolean;
  category: any;
  currentCate: Object[];
  currentCateIndex:Number
}

export default defineComponent({
  name: 'category',
  setup() {
    const data: DataProps = reactive({
      loading: false,
      category: [],
      currentCate: [],
      currentCateIndex:0
    });
    const refData = toRefs(data);
    const getCategorys = async () => {
      let res = await getCategory();
      console.log(res)
      data.category = res.data.categoryList;
      data.currentCate = res.data.categoryList[0].subCategoryList;
      console.log(res);
    };
    const toggleCate=(item:any,index:any)=>{
      if(index){
        data.currentCateIndex=index
        data.currentCate=data.category[index].subCategoryList
      }
    }
    onMounted(() => {
      getCategorys();
    });

    return {
      ...refData,
      toggleCate
    };
  },
});
</script>
<style lang="scss" scoped>
@import '@/assets/css/common.scss';

.container {
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: flex-start;

  .cate_ul{
    width: 100px;
    min-height: 100vh;
    float: left;
  }
  .cate_li {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: #333;
    &.active{
      color: red;
    }
  }
  .cate_content {
    min-height: 100vh;
    border-left:1px solid #ddd;
    display: flex;
    flex-wrap: wrap;
    flex:1;
    .currentCate {
      width: 33%;
      @include flex(column, space-between, center);
      .currentCate_img {
        width: 80%;
        // height: 120px;
      }
      .currentCate_name {
        height: 50px;
        color: #000;
        font-size: 14px;
        padding: 10px;
      }
    }
  }
}
</style>