<template>
  <div class="container">
    <!-- <IconFont type="icon-arrow-down" /> -->
    <div class="header_box flex_row">
      <div class="header_img">
        <IconFont type="icon-user-filling" />
      </div>
      <div class="h_left">
        <div class="nike_name">{{ nikeName }}</div>
        <div class="phone">{{ phone }}</div>
      </div>
      <div><IconFont type="icon-edit" />编辑资料</div>
    </div>
    <div class="order">
      <div class="flex_row">
        <div>我的订单</div>
        <div>全部订单<IconFont type="icon-arrow-right" /></div>
      </div>
      <div class="flex_row">
        <div class="order_tab">
          <div class="icon"><IconFont type="icon-daishoukuan" /></div>
          <div>待付款</div>
        </div>
        <div class="order_tab">
          <div class="icon"><IconFont type="icon-daifahuo" /></div>
          <div>待发货</div>
        </div>
        <div class="order_tab">
          <div class="icon"><IconFont type="icon-daishouhuo" /></div>
          <div>待收货</div>
        </div>
        <div class="order_tab">
          <div class="icon"><IconFont type="icon-daipingjia01" /></div>
          <div>待评价</div>
        </div>
        <div class="order_tab">
          <div class="icon"><IconFont type="icon-shouhou" /></div>
          <div>售后</div>
        </div>
      </div>
    </div>
    <div class="optbox">
      <div class="flex_row opt_row">
        <div> <IconFont type="icon-menu" />&nbsp;地址管理 </div>
        <div><IconFont type="icon-arrow-right" /></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import IconFont from '@/components/IconFont';
import { computed, defineComponent, onMounted, ref, h, toRefs, reactive } from 'vue';
import { useStore } from 'vuex';

interface DataProps {
  nikeName: string;
  phone: string;
}

export default defineComponent({
  name: 'user',
  components: { IconFont },
  setup() {
    const data: DataProps = reactive({
      nikeName: '去登录',
      phone: '',
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

.icon {
  color: #333;
  font-size: 12px;
}
.flex_row {
  @include flex(row, space-between, center);
}
.header_box,
.order,
.optbox {
  width: 100%;
}
.order_tab {
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  @include flex(column, space-between, center);
  .icon {
    font-size: 24px;
  }
}
.header_box {
  padding: 10px;
  min-height: 150px;
  padding-bottom: 30px;
  .header_img {
    font-size: 60px;
  }
  .h_left {
    width: 50%;
  }
}
.order {
  width: 95%;
  margin: 0 auto;
  box-shadow: 0 0px 4px rgba(156, 156, 156, 0.2);
  padding: 20px 5px;
}
.optbox{
  padding-left: 10px;
  .opt_row{
    font-size: 16px;
    border-bottom: 1px solid #ddd;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-right: 10px;
  }
}
</style>