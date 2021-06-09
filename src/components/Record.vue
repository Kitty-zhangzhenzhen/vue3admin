<template>
    <div class="cover"> 
      <div class="cover_inner">
      <!-- <van-pull-refresh v-model="state.refreshing" class="vanpull" @refresh="onRefresh"> -->
        <!-- <van-list
          v-model:loading="state.loading"
          :finished="state.finished"
          finished-text="没有更多了"
          @load="onLoad"
          class="val_list"
        >
          <div v-for="item in state.list" :key="item">{{item}}</div>
        </van-list> -->
        <div class="recommend_box" ref="wrapper">
            <div class="wrapper_inner">
                <ul>
                    <li v-for="item in state.list" :key="item">{{item}}</li>
                </ul>
            </div>
        </div>
        <div @click="closeModel">关闭</div>
      <!-- </van-pull-refresh> -->
    </div>
    </div>
</template>

<script lang="ts">
    import BScroll from '@better-scroll/core'

    import {
        Options,
        Vue
    } from 'vue-class-component';
    import {
        onMounted,
        reactive,
        toRefs,
        ref
    } from 'vue'
    interface DataProps {
        list: Object[];
        loading: Boolean;
        finished: Boolean;
        refreshing: Boolean;
        pageIndex: any;
    }
    export default {
        emits: ['callback'],
        setup(props: any, ctx: any) {
            const wrapper = ref();
            let scroll: any;
            const state: DataProps = reactive({
                list: [],
                loading: false,
                finished: false,
                refreshing: false,
                pageIndex: 0
            });

            const onLoad = () => {

                state.pageIndex++
                    for (let i = 0; i < 20; i++) {
                        state.list.push(state.list.length + 1);
                    }
                if (state.pageIndex > 1) {
                    scroll.refresh();
                }
            };


            const closeModel = () => {
                ctx.emit("callback")
            }
            onMounted(() => {
                onLoad();
                setTimeout(() => {
                        scroll = new BScroll('.wrapper_inner', {
                            scrollY: true,
                            probeType: 3,
                            click: true,
                            observe: true
                        })
                        scroll.on('scrollEnd', () => {
                            onLoad()
                        })
                    }, 1000)
                    // console.log(wrapper)

                // scroll.on('pullingUp', () => {
                //     console.log('pullingUp')
                // })
            })
            const onRefresh = () => {
                // 清空列表数据
                state.finished = false;

                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                state.loading = true;
                onLoad();
            };

            return {
                state,
                onLoad,
                onRefresh,
                closeModel
            };
        },
    };
</script>
<style lang="scss">
    .van-list {
        height: 100%;
    }
</style>
<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }
    
    .cover {
        position: fixed;
        background-color: rgba(0, 0, 0, .8);
        width: 7.5rem;
        height: 100vh;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .cover_inner {
            overflow: hidden;
            width: 6rem;
            height: 7rem;
            background: #fff;
        }
        .val_list {
            height: 6rem;
            overflow: auto;
        }
        .vanpull {
            height: 6rem;
        }
    }
    
    .recommend_box {
        width: 100%;
        height: 300px;
        border: 2px solid red;
        overflow: hidden;
        .wrapper_inner {
            width: 100%;
            height: 300px;
            overflow: hidden;
        }
    }
</style>