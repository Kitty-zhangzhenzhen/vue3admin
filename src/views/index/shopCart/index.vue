<template>
  <div class="container">
   
    <div class="cart-container_noCart" v-if="!hasCart" >
      <img src="http://cdn-opimage.qiumeiapp.com/xcx/xcxResources/cart/no-product.png" />
      <div style="margin-top: 28npx; font-size: 30npx; color: #666666"
        >购物车空空如也,来挑几件好货吧 {{hasCart}}</div
      >
      <router-link to="/home">
        <div class="cart-container_noCart_goHome">去逛逛</div>
      </router-link>
    </div>

    <div class="cart-container_hasCart" v-else>
      <div class="allProduct_body">
        <div v-for="item in shopArray" :key="item.productId">
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
            <div class="pro-img-box" style="margin-left: 10px">
              <img :src="item.coverImage" />
            </div>
            <div class="pro-info" style="width: 69%">
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
        <!-- <div v-if="shopArray.length == 0" style="height: 46px"></div> -->
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
  hasCart:Boolean;
}

export default defineComponent({
  name: 'shopCart',
  setup() {
    const data: DataProps = reactive({
      shopArray: [],
      hasCart:true
    });
    const getCartList = async () => {
      let res:any = await getProduct();
      if(!res.data.shopCartList.length){
        data.hasCart=false
        return
      }
      data.hasCart=true
      console.log(data.hasCart)
      data.shopArray = res.data.shopCartList;
     
    };
    const refData = toRefs(data);
    onMounted(() => {
      getCartList();
    });

    return {
      ...refData,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";

.cart-container {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    overflow-y: auto;
    width: 100%;
    .cart-container_noCart{
        text-align: center;
        width: 100%;
        img{
            width: 146px;
            height: 146px;
            margin-top: 80px;
        }
        .cart-container_noCart_goHome{
            width: 260px;
            height: 60px;
            line-height: 60px;
            font-size: 28px;
            color: #fff;
            background-color: #d6000f;
            margin: 0 auto;
            border-radius: 6px;
            margin-top: 40px;
            margin-bottom: 80px;
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
            margin-bottom: 10px;
            margin-left: 20px;
            overflow: hidden;
            .pro-img{
                img{
                    width: 100%;
                    height: 346px;
                }
            }
            .pro-desc{
                padding-left: 20px;
                padding-right: 20px;
                .title{
                    font-size: 28px;
                    color: #333;
                    @include multi-line-text(2);
                    margin-bottom: 10px;
                }
                .subTitle{
                    font-size: 28px;
                    color: #666;
                    @include multi-line-text(1);
                    margin-bottom: 10px;
                }
                .exchangeWeibi{
                    font-size: 18px;
                    margin-bottom: 10px;
                    // background-color: rgb(247,231,218);
                    background-image: url(http://cdn-opimage.qiumeiapp.com/vipXcx/xcxIcon/vip-icon.png);
                    background-repeat: no-repeat;
                    background-size: 100%;
                    border-radius: 20px;
                    padding-left: 44px;
                    height: 30px;
                    line-height: 30px;
                }
                .price{
                    margin-bottom: 10px;
                    .currentPrice{
                        font-size: 28px;
                        color: #d6000f;
                    }
                    .originalPrice{
                        font-size: 22px;
                        color: #666;
                        text-decoration: line-through; 
                        margin-left: 20px;
                    }
                }
            }
        }
    }
}

.cart-bottom_calculate {
    height: 92px;
    line-height: 90px;
    border-top: 1px solid #e8e8e8;
    position: fixed;
    left: 0;
    width: 100%;
    bottom: 0;
    z-index: 3;
    background: #ffffff;
    &_select {
      float: left;
      margin-left: 38px;
      color: #565656;
      font-size: 30px;
  
      img {
        display: inline-block;
        width: 35px;
        height: 35px !important;
        vertical-align: middle;
      }
    }
  
    &_goFillOrder {
      float: right;
      width: 266px;
      height: 93px;
      line-height: 93px;
      background: $themeColor;
      text-align: center;
      color: #ffffff;
      font-size: 30px;
    }
  
    &_totalAmount {
      float: right;
      margin-right: 20px;
      color: #565656;
      font-size: 30px;
    }
  }
  
  .prevent-click_styleBg {
    background: #e6e6e6 !important;
  }
  
  .allProduct_body {
    width: 100vw;
    background: #ffffff;
  
    &_single {
      //height: 240);
      padding-top: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #e8e8e8;
  
      &_isSelect {
        float: left;
        line-height: 200px;
        margin-left: 15px;
  
        img {
          width: 36px;
          height: 36px;
        }
      }
  
      &_headImg {
        float: left;
  
        img {
          // width: 200px;
          // height: 200px;
        }
      }
  
      &_info {
        float: left;
        width: 70%;
        margin-left: 15px;
  
        &_name {
          margin-top: 20px;
          color: #333333;
          font-size: 24px;
          // height: 150);
          overflow: hidden;
        }
  
        &_price {
          margin-top: 10px;
  
          &_num {
            color: $themeColor;
            font-size: 30px;
            float: left;
          }
  
          &_edit {
            float: right;
            width: 136px;
            border: 1px solid #e8e8e8;
            border-radius: 16px;
  
            &_jian {
              height: 44px;
              line-height: 44px;
              text-align: center;
              float: left;
              vertical-align: middle;
              width: 38px;
              color: #999999;
            }
  
            &_num {
              height: 44px;
              line-height: 44px;
              text-align: center;
              float: left;
              vertical-align: middle;
              width: 59px;
              color: #555555;
              border-left: 1px solid #e8e8e8;
              border-right: 1px solid #e8e8e8;
              font-size: 30px;
            }
  
            &_jia {
              height: 44px;
              line-height: 44px;
              text-align: center;
              float: left;
              vertical-align: middle;
              width: 37px;
              color: #999999;
            }
          }
  
          &_del {
            float: right;
            margin-right: 33px;
            vertical-align: middle;
  
            img {
              
              width: 20px;
              vertical-align: middle;
            }
          }
  
          &_icon {
            float: right;
  
            img {
              width: 20px;
            }
          }
        }
      }
    }
  }
  
  .giftProduct-container {
    &_single {
      //height: 90);
      //line-height: 90);
      //border-bottom: 1) solid #e8e8e8;
      padding: 33px 0 41px 0;
  
      &_icon {
        display: inline-block;
        width: 70px;
        height: 35px;
        line-height: 35px;
        color: $themeColor;
        text-align: center;
        margin-left: 30px;
        font-size: 24px;
        border: 1px solid #d6000f;
        border-radius: 10px;
        vertical-align: top;
      }
  
      &_info {
        display: inline-block;
        margin-left: 30px;
        font-size: 26px;
  
        &_productName {
          color: #333333;
        }
  
        &_time {
          color: #999999;
          font-size: 24px;
          margin-top: 14px;
        }
      }
  
      &_select {
        float: right;
        margin-right: 29px;
        vertical-align: middle;
  
        img {
          width: 36px;
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
    height: 90px;
    width: 100%;
    background: #fffdef;
    display: flex;
    align-items: center;
  
    img {
      width: 30px;
      margin-left: 30px;
    }
    .right-icon{
      width: 24px;
      height: 24px;
      margin-left: 0;
    }
  
    > view:nth-of-type(1) {
      margin-left: 25px;
      color: #d4010f;
      font-size: 15px;
    }
  
    > view:nth-of-type(2) {
      color: #353633;
      font-size: 15px;
      position: absolute;
      right: 30px;
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
    bottom: 92px;
    left: 0;
    height: 670px;
    width: 100%;
    background: #fff;
  
    .list {
      height: 580px;
      width: 100%;
      overflow-y: scroll;
      margin-top: 93px;
  
      > view {
        height: 150px;
        display: flex;
        padding: 20px 0;
        border-bottom: 1px solid #dbdbdb;
  
        > view:nth-of-type(1) {
          margin: 0 30px;
          display: flex;
          align-items: center;
  
          img {
            display: block;
            width: 28px;
            height: 28px;
          }
        }
  
        > view:nth-of-type(2) {
          display: flex;
          align-items: center;
  
          img {
            display: block;
            width: 110px;
            height: 110px;
          }
        }
  
        > view:nth-of-type(3) {
          margin-left: 30px;
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
    padding: 8px 15px;
    //min-height: 240npx;
    height: auto;
    //border-bottom: 1) solid #e8e8e8;
  
    .select-box {
      img {
        width: 20px;
        height: 20px;
      }
    }
  
    .pro-img-box {
      margin-left: 10px;
  
      img {
        width: 100px;
        height: 100px;
        vertical-align: middle;
      }
    }
  
    .pro-info {
      min-height: 100px;
      margin-left: 15px;
      flex-shrink: 1;
      @include flex(column, space-between, initial);
  
      .pro-name-box {
        .pro-name{
          color: #333333;
          font-size: 14px;
          //height: 80);
          @include multi-line-text(2);
        }
        .pro-subname{
          color:#999999;
          font-size: 24px;
          @include multi-line-text(1);
        }
      }
  
      .price-info {
        width: 100%;
        @include flex(row, space-between, initial);
  
        .price-num {
          color: #d6000f;
          font-size: 16px;
        }
  
        .edit-box {
          // width: 220px;
          @include flex(row, space-between, center);
  
          .del {
            margin-left: 2px;
            img {
              width: 20px;
              height: 20px !important;
              vertical-align: middle;
            }
          }
  
          .price-edit {
            width: 80px;
            border: 1px solid #e8e8e8;
            border-radius: 16px;
            @include flex(row, space-between, center);
            view {
              display: inline-block;
            }
  
            .jian {
              height: 25px;
              line-height: 25px;
              text-align: center;
              width: 30px;
              color: #999999;
            }
  
            .num {
              height: 25px;
              line-height: 25px;
              text-align: center;
              width: 30px;
              color: #555555;
              border-left: 1px solid #e8e8e8;
              border-right: 1px solid #e8e8e8;
              font-size: 16px;
            }
  
            .jia {
              height: 25px;
              line-height: 25px;
              text-align: center;
              width: 30px;
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
    margin-top: 20px;
  
    &-1 {
      background: url('http://cdn-opimage.qiumeiapp.com/xcx/xcxResources/common/xg_bg.png');
      width: 106px;
      height: 32px;
      background-size: 100% 100%;
      color: #fff;
      text-align: center;
      line-height: 32px;
      font-size: 12px;
    }
  
    &-2 {
      margin-left: 10px;
  
      > text {
        color: #d8000e;
      }
    }
  } 
</style>