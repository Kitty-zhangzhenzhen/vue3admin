<template>
    <div class="content">

        <div class="game-goods-wrap">
          <div class="game-goods-list clear">
            <div class="game-goods fl">
              <div class="game-goods-box" id="game1">
                <div class="game-goods-ul">
                  <div v-for="items in 6" :key="items">
                    <div style="height:80px;" v-for="item in imglist" :key="item">
                      <img :src="item" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="game-goods fl">
              <div class="game-goods-box" id="game2">
                <div
                  class="game-goods-ul"
                  :style="'transform:translate(0px, -' + 80 + 'px) translateZ(0px)'"
                >
                  <div v-for="items in 6" :key="items">
                    <div style="height:80px;" v-for="item in imglist" :key="item">
                      <img :src="item" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="game-goods fl">
              <div class="game-goods-box" id="game3">
                <div
                  class="game-goods-ul"
                  :style="'transform:translate(0px, -' + 160 + 'px) translateZ(0px)'"
                >
                  <div v-for="items in 6" :key="items">
                    <div style="height:80px;" v-for="item in imglist" :key="item">
                      <img :src="item" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button @click="getPrize" class="getPrze">点我就对了</button>
        </div>
  </template>

<script lang="ts">
    import {
        Options,
        Vue
    } from 'vue-class-component';
    import {
        onMounted,
        reactive,
        toRefs,
        watch
    } from 'vue'

    interface DataProps {
        getWardAgain: Boolean;
        gameLen: number;
        game_pagesize: number;
        game_list_item_h: number;
        game_goods: any
    }

    export default {
        props: ['imglist', 'ward'],
        setup(props: any, ctx: any) {
            const data: DataProps = reactive({
                getWardAgain: true,
                gameLen: 3,
                game_pagesize: 6,
                game_list_item_h: 80,
                game_goods: ''
            })
            const getPrize = () => {
                if (!data.getWardAgain) return;
                start(1, 2, 2)
            }
            const start = (a: number, b: number, c: number) => {
                let numrand: any, y: any;
                let game_goods = data.game_goods;
                // if (fun && typeof(fun) == 'function') {
                //     setTimeout(function() {
                //         fun()
                //     }, 5000)
                // }


                numrand = [a, b, c];
                var domIndex = 0;
                var timer = setInterval(() => {
                    if (domIndex > 2) {
                        clearTimeout(timer);
                        return;
                    }
                    y = (numrand[domIndex] + data.gameLen * (data.game_pagesize - 1)) * data.game_list_item_h;
                    game_goods[domIndex].style.cssText = 'transition-duration:5000ms;transform:translate(0px, -' + y + 'px) translateZ(0px)';
                    domIndex++;
                }, domIndex * 50);
                for (var i = 0; i < game_goods.length; i++) {
                    let y2 = (numrand[0]) * data.game_list_item_h;
                    let y3 = (numrand[1]) * data.game_list_item_h;
                    let y4 = (numrand[2]) * data.game_list_item_h;
                    game_goods[2].addEventListener('webkitTransitionEnd', function() {
                        game_goods[2].style.cssText = 'transition-duration:00ms;transform:translate(0px, -' + y4 + 'px) translateZ(0px)';
                        game_goods[2].removeEventListener('webkitTransitionEnd', function() {});
                    })
                    game_goods[1].addEventListener('webkitTransitionEnd', function() {
                        game_goods[1].style.cssText = 'transition-duration:00ms;transform:translate(0px, -' + y3 + 'px) translateZ(0px)';
                        game_goods[1].removeEventListener('webkitTransitionEnd', function() {});
                    })
                    game_goods[0].addEventListener('webkitTransitionEnd', function() {
                        game_goods[0].style.cssText = 'transition-duration:00ms;transform:translate(0px, -' + y2 + 'px) translateZ(0px)';
                        game_goods[0].removeEventListener('webkitTransitionEnd', function() {});
                    })
                }

            }
            onMounted(() => {
                data.game_goods = document.getElementsByClassName('game-goods-ul');
            })
            const refData = toRefs(data);
            return {
                ...refData,
                getPrize
            }
        },


    }
</script>

<style lang="scss" scoped>
    .getPrze {
        background: lightpink;
        width: 250px;
        height: 40px;
        margin: 100px auto 0 auto;
        display: block;
        font-size: .3rem;
    }
    
    .fl {
        float: left;
    }
    
    .fr {
        float: right;
    }
    
    .clear {
        clear: both;
    }
    
    .tigers .container_inner {
        padding-top: .44rem;
    }
    
    .tiger_wrapper {
        width: 3.8rem;
        height: 1.5rem;
        overflow: hidden;
        position: absolute;
        top: 3.9rem;
        left: .6rem;
    }
    
    .game-goods-wrap {
        padding-top: 1rem;
        width: 100%;
        height: 100%;
        position: relative;
    }
    
    .game-goods-list {
        background: LightPink;
        overflow: hidden;
        width: 3.8rem;
        height: 70px;
        margin: 0 auto;
    }
    
    .game-goods {
        width: 1.26rem;
        height: 75px;
        overflow: hidden;
    }
    
    .game-goods-ul img {
        width: .8rem;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        margin: auto;
    }
    
    .game-goods-ul div {
        position: relative;
        width: 1.2rem;
    }
    
    .share_png {
        width: 4.93rem;
        position: absolute;
        top: .82rem;
        right: 0;
    }
</style>