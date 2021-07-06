<template>
  <div class="container">
    <div class="order_tab flex_row">
      <div class="tab_pane">
        全部
        <p class="border"></p>
      </div>
      <div class="tab_pane">
        待付款
        <p class="border"></p>
      </div>
      <div class="tab_pane">
        待发货
        <p class="border"></p>
      </div>
      <div class="tab_pane">
        待收货
        <p class="border"></p>
      </div>
      <div class="tab_pane">
        已完成
        <p class="border"></p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import IconFont from '@/components/IconFont';
import { computed, defineComponent, onMounted, ref, h, toRefs, reactive } from 'vue';
import { useStore } from 'vuex';

interface DataProps {
    tabIndex:Number
}

export default defineComponent({
  name: 'user',
  components: { IconFont },
  setup() {
    const data: DataProps = reactive({
        tabIndex:1
    });
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.flex_row {
  @include flex(row, space-between, center);
}
.order_tab {
  width: 100%;
  font-size: 14px;
  color: #333;
  height: 40px;
   padding: 0 10px;
  .tab_pane {
    height: 40px;
    line-height: 40px;
    position: relative;
    &.active{
        color: $themeColor;
        .border{
            opacity: 1;
        }
    }
    .border {
      opacity: 0;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 2px;
      background: $themeColor;
    }
  }
}
</style>