<template>
  <div class="footers">
    <div
      class="tab_li"
      v-for="item in tabArray"
      :key="item.name"
      @click="tabClick(item)"
    >
      <img
        class="tab_icon"
        v-if="item.router == activeTab"
        :src="item.selectedIconPath"
        alt=""
      />
      <img class="tab_icon" v-else :src="item.iconPath" alt="" />

      <div class="tab_name">{{ item.name }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { onMounted, reactive, toRefs, watch } from "vue";
interface DataProps {
  tabArray: object[];
  activeTab: string;
}
export default {
  setup(props: any, ctx: any) {
    const data: DataProps = reactive({
      activeTab: "/home",
      tabArray: [
        {
          router: "/home",
          name: "首页",
          iconPath: require("../../assets/tabbars/home-icon.png"),
          selectedIconPath: require("../../assets/tabbars/home-active-icon.png"),
          remark: "",
        },
        {
          router: "/category",
          name: "分类",
          iconPath: require("../../assets/tabbars/shoppingmall-icon.png"),
          selectedIconPath: require("../../assets/tabbars/shoppingmall-active-icon.png"),
          remark: "",
        },
        {
          router: "/shopCart",
          name: "购物车",
          iconPath: require("../../assets/tabbars/gouwuche-icon.png"),
          selectedIconPath: require("../../assets/tabbars/gouwuche-active-icon.png"),
          remark: "",
        },
        {
          router: "/user",
          name: "我的",
          iconPath: require("../../assets/tabbars/personal-icon.png"),
          selectedIconPath: require("../../assets/tabbars/personal-active-icon.png"),
          remark: "",
        },
      ],
    });
    const refData = toRefs(data);

    const tabClick = () => {};
    onMounted(() => {});
    return {
      ...refData,
      tabClick,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/common.scss";
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