<template>
  <div class="container">
    <div class="order_tab flex_row">
      <div class="tab_pane" :class="tabIndex == 1 ? 'active' : ''">
        全部
        <p class="border"></p>
      </div>
      <div class="tab_pane" :class="tabIndex == 2 ? 'active' : ''">
        待付款
        <p class="border"></p>
      </div>
      <div class="tab_pane" :class="tabIndex == 3 ? 'active' : ''">
        待发货
        <p class="border"></p>
      </div>
      <div class="tab_pane" :class="tabIndex == 4 ? 'active' : ''">
        待收货
        <p class="border"></p>
      </div>
      <div class="tab_pane" :class="tabIndex == 5 ? 'active' : ''">
        已完成
        <p class="border"></p>
      </div>
    </div>
    <div class="order_list">
      <div class="order_number">
        <div>订单号：</div>
        <div class="order_pay_state">已退款</div>
      </div>
      <div class="order_detail flex_row">
        <img class="order_img" src="https://res.qiumeiapp.com/xcx/proImagesAmECTEcNz3.jpg" alt="" />
        <div class="order_info">
          <div class="pro_name"> 商品名称 </div>
          <div class="pro_price">￥78</div>
        </div>
        <div class="order_state">
          <div class="order_pay_state">已退款</div>
          <div class="order_count">X2</div>
        </div>
      </div>
      <div class="order_summary">共1件，合计<span>78</span></div>
    </div>
  </div>
</template>
<script lang="ts">
import IconFont from '@/components/IconFont';
import { computed, defineComponent, onMounted, ref, h, toRefs, reactive } from 'vue';
import { useStore } from 'vuex';

interface DataProps {
  tabIndex: Number;
}

export default defineComponent({
  name: 'user',
  components: { IconFont },
  setup() {
    const data: DataProps = reactive({
      tabIndex: 1,
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
.order_list {
  margin-bottom: 10px;
  padding:0 10px;
  width: 100%;
  .order_number {
    color: #666;
    font-size: 16px;
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-items: center;
    border-bottom: 1px solid #e6e6e6;
    .order_pay_state {
      color: $themeColor;
    }
  }
  .order_detail {
    padding: 10px 0;
    .order_img {
      width: 100px;
      height: 100px;
    }
    .order_info {
      height: 100%;
      width: 55%;
      margin: 0 10px;
      .pro_name {
        font-size: 14px;
        color: #222222;
        text-align: justify;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        -webkit-box-align: initial;
        -ms-flex-align: initial;
        align-items: initial;
        -webkit-align-items: initial;
      }
      .pro_price {
        color: $themeColor;
      }
    }
    .order_state {
      .order_pay_state {
        color: $themeColor;
      }
      .order_count{
        color: #666;
        font-size: 14px;
      }
    }
  }
}
.order_tab {
  width: 100%;
  font-size: 14px;
  color: #333;
  height: 40px;
  border-bottom: 1px solid #ddd;
  padding: 0 10px;
  .tab_pane {
    height: 40px;
    line-height: 40px;
    position: relative;
    &.active {
      color: $themeColor;
      .border {
        opacity: 1;
      }
    }
    .border {
      opacity: 0;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -13px;
      height: 2px;
      background: $themeColor;
    }
  }
}
</style>