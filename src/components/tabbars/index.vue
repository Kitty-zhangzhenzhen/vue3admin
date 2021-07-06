<template>
  <div class="footers">
    <div class="tab_li" v-for="item in tabArray" :key="item.name" @click="tabClick(item)">
      <img class="tab_icon" v-if="item.router == activeTab" :src="item.selectedIconPath" alt="" />
      <img class="tab_icon" v-else :src="item.iconPath" alt="" />

      <div class="tab_name" :class="item.router == activeTab ? 'active' : ''">{{ item.name }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import homeicon from '../../assets/tabbars/home-icon.png';
import homeActiveicon from '../../assets/tabbars/home-active-icon.png';
import shoppingmall from '../../assets/tabbars/shoppingmall-icon.png';
import shoppingmallActive from '../../assets/tabbars/shoppingmall-active-icon.png';
import gouwuche from '../../assets/tabbars/gouwuche-icon.png';
import gouwucheActive from '../../assets/tabbars/gouwuche-active-icon.png';
import personal from '../../assets/tabbars/personal-icon.png';
import personalActive from '../../assets/tabbars/personal-active-icon.png';
import Vue from 'vue';
import { onMounted, getCurrentInstance, ComponentInternalInstance, toRefs, reactive } from 'vue';
interface DataProps {
  tabArray: object[];
  activeTab: string;
}
export default {
  setup(props: any, ctx: any) {
    const data: DataProps = reactive({
      activeTab: '/home',
      tabArray: [
        {
          router: '/home',
          name: '首页',
          iconPath: homeicon,
          selectedIconPath: homeActiveicon,
          remark: '',
        },
        {
          router: '/category',
          name: '分类',
          iconPath: shoppingmall,
          selectedIconPath: shoppingmallActive,
          remark: '',
        },
        {
          router: '/shopCart',
          name: '购物车',
          iconPath: gouwuche,
          selectedIconPath: gouwucheActive,
          remark: '',
        },
        {
          router: '/user',
          name: '我的',
          iconPath: personal,
          selectedIconPath: personalActive,
          remark: '',
        },
      ],
    });
    const refData = toRefs(data);
    const { proxy } = getCurrentInstance() as ComponentInternalInstance;
    const tabClick = (item: any) => {

      (proxy as any).$router.replace({
        path: item.router,
      });
      console.log(item)

      data.activeTab = item.router;
    };
    onMounted(() => {
      data.activeTab = proxy?.$router.currentRoute.value.path as string;
    });
    return {
      ...refData,
      tabClick,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.footers {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #fefefe;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .tab_li {
    @include flex(column, center, center);
    .tab_icon {
      width: 23px;
      height: 23px;
      margin-bottom: 5px;
    }
    .tab_name {
      font-size: 12px;
      text-align: center;
      color: #333;
      &.active {
        color: $themeColor;
      }
    }
  }
}
</style>