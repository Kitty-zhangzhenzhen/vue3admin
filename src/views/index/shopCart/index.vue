<template>
  <div class="container">
    <div class="cart-container_noCart" v-if="shoppingCartList.length==0">
      <img src="http://cdn-opimage.qiumeiapp.com/xcx/xcxResources/cart/no-product.png" />
      <div style="margin-top: 28npx; font-size: 30npx; color: #666666"
        >购物车空空如也,来挑几件好货吧</div
      >
      <router-link path="/home">
        <div class="cart-container_noCart_goHome">去逛逛</div>
      </router-link>
    </div>

    <div class="cart-container_hasCart" wx:if="{{hasCart}}">
      <div class="allProduct_body">
        <div v-for="item in shoppingCartList" :key="item.productId">
          <!--常规产品 -->
          <div class="cart-pro-item" v-if="item.channelType != 3" style="padding-top: 15npx">
            <div class="select-box">
              <img
                :src="
                  item.isSelect
                    ? 'http://cdn-opimage.qiumeiapp.com/xcx/xcxResources/cart/isSelect-active.png'
                    : 'http://cdn-opimage.qiumeiapp.com/xcx/xcxResources/cart/isSelect.png'
                "
                @click="changeSelect"
              />
            </div>
            <div class="pro-img-box" style="margin-left: 20npx">
              <img :src="item.coverImage" />
            </div>
            <div class="pro-info" style="width: 70%">
              <div class="pro-name-box">
                <div class="pro-name">
                  {{ item.productName }}
                </div>

                <div class="pro-subname">{{ item.subName }}</div>
                <div class="xg" v-if="item.isLimitedPurchase">
                  <div class="xg-1">{{ item.limitedPurchaseMinBuyCount }}件起购</div>
                  <div class="xg-2"
                    >每个用户最多可买
                    <text>{{ item.limitedPurchaseCount }}</text>
                    件
                  </div>
                </div>
              </div>
              <div class="price-info">
                <div class="price-num">￥{{ item.currentPrice }}</div>

                <div class="edit-box">
                  <div class="price-edit">
                    <div class="jian" @click="jian" data-index="{{index}}">- </div>
                    <div class="num">{{ item.productCount }}</div>
                    <div class="jia" @click="jia" data-index="{{index}}">+ </div>
                  </div>
                  <div class="del">
                    <img
                      src="http://cdn-opimage.qiumeiapp.com/xcx/xcxResources/cart/delete-icon.png"
                      @click="deleteXcxShoppingCartProduct"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="recommendProList.length == 0" style="height: 46px"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, h, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { getProduct } from './service';
interface DataProps {
  shopArray: Object[];
}

export default defineComponent({
  name: 'shopCart',
  setup() {
    const data: DataProps = reactive({
      shopArray: [],
    });
    const getCartList = async () => {
      let res = await getProduct();
      data.shopArray = res.data.productList;
    };
    const refData = toRefs(data);
    onMounted(() => {
      getCartList();
    });

    return {
      refData,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/common.scss";
.cart-container {
    position: absolute;
    top: 0;
    bottom: npx(0);
    z-index: 2;
    overflow-y: auto;
    width: 100%;
    .cart-container_noCart{
        text-align: center;
        width: 100%;
        image{
            width: npx(146);
            height: npx(146);
            margin-top: npx(80);
        }
        .cart-container_noCart_goHome{
            width: npx(260);
            height: npx(60);
            line-height: npx(60);
            font-size: npx(28);
            color: #fff;
            background-color: #d6000f;
            margin: 0 auto;
            border-radius: npx(6);
            margin-top: npx(40);
            margin-bottom: npx(80);
        }
    }
}

.recommend-container{
    width: 100%;
    .title{
        width: 100%;
    }
    .product-list{
        width: 100%;
        .productItem{
            background-color: #fff;
            width: 46%;
            display: inline-block;
            margin-bottom: npx(10);
            margin-left: npx(20);
            overflow: hidden;
            .pro-img{
                image{
                    width: 100%;
                    height: npx(346);
                }
            }
            .pro-desc{
                padding-left: npx(20);
                padding-right: npx(20);
                .title{
                    font-size: npx(28);
                    color: #333;
                    @include multi-line-text(2);
                    margin-bottom: npx(10);
                }
                .subTitle{
                    font-size: npx(28);
                    color: #666;
                    @include multi-line-text(1);
                    margin-bottom: npx(10);
                }
                .exchangeWeibi{
                    font-size: npx(18);
                    margin-bottom: npx(10);
                    // background-color: rgb(247,231,218);
                    background-image: url(http://cdn-opimage.qiumeiapp.com/vipXcx/xcxIcon/vip-icon.png);
                    background-repeat: no-repeat;
                    background-size: 100%;
                    border-radius: npx(20);
                    padding-left: npx(44);
                    height: npx(30);
                    line-height: npx(30);
                }
                .price{
                    margin-bottom: npx(10);
                    .currentPrice{
                        font-size: npx(28);
                        color: #d6000f;
                    }
                    .originalPrice{
                        font-size: npx(22);
                        color: #666;
                        text-decoration: line-through; 
                        margin-left: npx(20);
                    }
                }
            }
        }
    }
}

.cart-bottom_calculate {
    height: npx(92);
    line-height: npx(90);
    border-top: npx(1) solid #e8e8e8;
    position: fixed;
    left: 0;
    width: 100%;
    bottom: 0;
    z-index: 3;
    background: #ffffff;
    &_select {
      float: left;
      margin-left: npx(38);
      color: #565656;
      font-size: npx(30);
  
      image {
        display: inline-block;
        width: npx(35);
        height: npx(35) !important;
        vertical-align: middle;
      }
    }
  
    &_goFillOrder {
      float: right;
      width: npx(266);
      height: npx(93);
      line-height: npx(93);
      background: $themeColor;
      text-align: center;
      color: #ffffff;
      font-size: npx(30);
    }
  
    &_totalAmount {
      float: right;
      margin-right: npx(20);
      color: #565656;
      font-size: npx(30);
    }
  }
  
  .prevent-click_styleBg {
    background: #e6e6e6 !important;
  }
  
  .allProduct_body {
    background: #ffffff;
  
    &_single {
      //height: npx(240);
      padding-top: npx(30);
      padding-bottom: npx(30);
      border-bottom: npx(1) solid #e8e8e8;
  
      &_isSelect {
        float: left;
        line-height: npx(200);
        margin-left: npx(15);
  
        image {
          width: npx(36);
          height: npx(36) !important;
        }
      }
  
      &_headImg {
        float: left;
  
        image {
          width: npx(200);
          height: npx(200) !important;
        }
      }
  
      &_info {
        float: left;
        width: 70%;
        margin-left: npx(15);
  
        &_name {
          margin-top: npx(20);
          color: #333333;
          font-size: npx(24);
          // height: npx(150);
          overflow: hidden;
        }
  
        &_price {
          margin-top: npx(10);
  
          &_num {
            color: $themeColor;
            font-size: npx(30);
            float: left;
          }
  
          &_edit {
            float: right;
            width: npx(136);
            border: npx(1) solid #e8e8e8;
            border-radius: npx(16);
  
            &_jian {
              height: npx(44);
              line-height: npx(44);
              text-align: center;
              float: left;
              vertical-align: middle;
              width: npx(38);
              color: #999999;
            }
  
            &_num {
              height: npx(44);
              line-height: npx(44);
              text-align: center;
              float: left;
              vertical-align: middle;
              width: npx(59);
              color: #555555;
              border-left: npx(1) solid #e8e8e8;
              border-right: npx(1) solid #e8e8e8;
              font-size: npx(30);
            }
  
            &_jia {
              height: npx(44);
              line-height: npx(44);
              text-align: center;
              float: left;
              vertical-align: middle;
              width: npx(37);
              color: #999999;
            }
          }
  
          &_del {
            float: right;
            margin-right: npx(33);
            vertical-align: middle;
  
            image {
              width: npx(30);
              height: npx(30) !important;
              vertical-align: middle;
            }
          }
  
          &_icon {
            float: right;
  
            image {
              width: npx(30);
              height: npx(30) !important;
            }
          }
        }
      }
    }
  }
  
  .giftProduct-container {
    &_single {
      //height: npx(90);
      //line-height: npx(90);
      //border-bottom: npx(1) solid #e8e8e8;
      padding: npx(33) 0 npx(41) 0;
  
      &_icon {
        display: inline-block;
        width: npx(70);
        height: npx(35);
        line-height: npx(35);
        color: $themeColor;
        text-align: center;
        margin-left: npx(30);
        font-size: npx(24);
        border: npx(1) solid #d6000f;
        border-radius: npx(10);
        vertical-align: top;
      }
  
      &_info {
        display: inline-block;
        margin-left: npx(30);
        font-size: npx(26);
  
        &_productName {
          color: #333333;
        }
  
        &_time {
          color: #999999;
          font-size: npx(24);
          margin-top: npx(14);
        }
      }
  
      &_select {
        float: right;
        margin-right: npx(29);
        vertical-align: middle;
  
        image {
          width: npx(36);
          height: npx(36) !important;
          vertical-align: middle;
        }
      }
    }
  
    .noAvailableGiftList {
      background: #fcfcfc;
  
      .giftProduct-container_single_icon {
        border-color: #ababab;
        color: #ababab;
      }
  
      .giftProduct-container_single_info {
        .giftProduct-container_single_info_productName {
          color: #ababab;
        }
  
        .giftProduct-container_single_info_time {
          color: #cecece;
        }
      }
    }
  }
  
  .gift-flag {
    // position: fixed;
    // top: 0;
    // left: 0;
    height: npx(90);
    width: 100%;
    background: #fffdef;
    display: flex;
    align-items: center;
  
    image {
      width: npx(30);
      height: npx(30);
      margin-left: npx(30);
    }
    .right-icon{
      width: npx(24);
      height: npx(24);
      margin-left: npx(0);
    }
  
    > view:nth-of-type(1) {
      margin-left: npx(25);
      color: #d4010f;
      font-size: 15px;
    }
  
    > view:nth-of-type(2) {
      color: #353633;
      font-size: 15px;
      position: absolute;
      right: npx(30);
    }
  }
  
  .shade {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 1000%;
    background: rgba(0, 0, 0, 0.4);
  }
  
  .gift-list {
    position: fixed;
    bottom: npx(92);
    left: 0;
    height: npx(670);
    width: 100%;
    background: #fff;
  
    .list {
      height: npx(580);
      width: 100%;
      overflow-y: scroll;
      margin-top: npx(93);
  
      > view {
        height: npx(150);
        display: flex;
        padding: npx(20) 0;
        border-bottom: 1px solid #dbdbdb;
  
        > view:nth-of-type(1) {
          margin: 0 npx(30);
          display: flex;
          align-items: center;
  
          image {
            display: block;
            width: npx(28);
            height: npx(28);
          }
        }
  
        > view:nth-of-type(2) {
          display: flex;
          align-items: center;
  
          image {
            display: block;
            width: npx(110);
            height: npx(110);
          }
        }
  
        > view:nth-of-type(3) {
          margin-left: npx(30);
          font-size: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
  
          > view:nth-of-type(2) {
            color: #666;
          }
        }
      }
    }
  }
  
  .cart-pro-item {
    @include flex(row, initial, center);
    padding: npx(15) npx(30);
    //min-height: 240npx;
    height: auto;
    //border-bottom: npx(1) solid #e8e8e8;
  
    .select-box {
      image {
        width: npx(36);
        height: npx(36) !important;
      }
    }
  
    .pro-img-box {
      margin-left: npx(10);
  
      image {
        width: npx(200);
        height: npx(200) !important;
        vertical-align: middle;
      }
    }
  
    .pro-info {
      min-height: npx(150);
      margin-left: npx(15);
      @include flex(column, space-between, initial);
  
      .pro-name-box {
        .pro-name{
          color: #333333;
          font-size: npx(24);
          //height: npx(80);
          @include multi-line-text(2);
        }
        .pro-subname{
          color:#999999;
          font-size: npx(24);
          @include multi-line-text(1);
        }
      }
  
      .price-info {
        @include flex(row, space-between, initial);
  
        .price-num {
          color: #d6000f;
          font-size: npx(28);
        }
  
        .edit-box {
          width: npx(220);
          @include flex(row, space-between, center);
  
          .del {
            image {
              width: npx(36);
              height: npx(36) !important;
              vertical-align: middle;
            }
          }
  
          .price-edit {
            width: npx(155);
            border: npx(1) solid #e8e8e8;
            border-radius: npx(16);
  
            view {
              display: inline-block;
            }
  
            .jian {
              height: npx(44);
              line-height: npx(44);
              text-align: center;
              width: npx(50);
              color: #999999;
            }
  
            .num {
              height: npx(44);
              line-height: npx(44);
              text-align: center;
              width: npx(50);
              color: #555555;
              border-left: npx(1) solid #e8e8e8;
              border-right: npx(1) solid #e8e8e8;
              font-size: npx(30);
            }
  
            .jia {
              height: npx(44);
              line-height: npx(44);
              text-align: center;
              width: npx(50);
              color: #999999;
            }
          }
        }
      }
    }
  }
  
  .xg {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 13px;
    margin-top: npx(20);
  
    &-1 {
      background: url('http://cdn-opimage.qiumeiapp.com/xcx/xcxResources/common/xg_bg.png');
      width: npx(106);
      height: npx(32);
      background-size: 100% 100%;
      color: #fff;
      text-align: center;
      line-height: npx(32);
      font-size: 12px;
    }
  
    &-2 {
      margin-left: npx(10);
  
      > text {
        color: #d8000e;
      }
    }
  } 
</style>