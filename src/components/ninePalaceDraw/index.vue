<template>
    <div class="squared_content">
        <div :class="lotteryInfo.activeId === 1 ? 'squared_main isActive':'squared_main'">1</div>
        <div :class="lotteryInfo.activeId === 2 ? 'squared_main isActive':'squared_main'">2</div>
        <div :class="lotteryInfo.activeId === 3 ? 'squared_main isActive':'squared_main'">3</div>
        <div :class="lotteryInfo.activeId === 8 ? 'squared_main isActive':'squared_main'">8</div>
        <div class="btn" @click="handleClick">click</div>
        <div :class="lotteryInfo.activeId === 4 ? 'squared_main isActive':'squared_main'">4</div>
        <div :class="lotteryInfo.activeId === 7 ? 'squared_main isActive':'squared_main'">7</div>
        <div :class="lotteryInfo.activeId === 6 ? 'squared_main isActive':'squared_main'">6</div>
        <div :class="lotteryInfo.activeId === 5 ? 'squared_main isActive':'squared_main'">5</div>
  
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
        disable: Boolean,
            lotteryInfo: any
    }

    export default {
        props: {
            lottery: {
                default: ''
            }
        },
        setup(props: any, ctx: any) {
            const data: DataProps = reactive({
                disable: false,
                lotteryInfo: {
                    activeId: 0, // 控制样式
                    index: 1, // 起始位置
                    times: 0, // 转动次数
                    cycle: 50, // 转动基本次数：即至少需要转动多少次再进入抽奖环节
                    conut: 8, // 总共有多少格
                    speed: 200, //初始转动速度
                    speedMax: 30, // 最快转动速度
                    speedMin: 200, // 最慢转动速度
                    prize: null
                },

            })
            const refData = toRefs(data);
            const handleClick = () => {
                if (data.disable) return;
                data.disable = true;
                ctx.emit('setlottery')
            }
            const lottery = (lottery: any, callback: Function) => {
                data.lotteryInfo.activeId = 1;
                data.lotteryInfo.prize = lottery;
                $roll(callback)
            }
            const $roll = (callback: Function) => {
                let lottery = data.lotteryInfo
                setTimeout(() => {
                    lottery.activeId = lottery.activeId >= lottery.conut ? 1 : lottery.activeId + 1
                    if (lottery.times < lottery.cycle) {
                        lottery.times++
                            lottery.speed = lottery.speed === lottery.speedMax ? lottery.speedMax : lottery.speed - 10
                        $roll(callback)
                        return
                    }
                    if (lottery.times < lottery.cycle + lottery.conut) {
                        lottery.times++
                            lottery.speed = lottery.speed === lottery.speedMin ? lottery.speedMin : lottery.speed + 20
                        $roll(callback)
                        return
                    }
                    if (lottery.activeId != lottery.prize) {
                        lottery.speed = lottery.speed === lottery.speedMin ? lottery.speedMin : lottery.speed + 20
                        $roll(callback)
                        return
                    }
                    if (lottery.activeId === lottery.prize) {
                        setTimeout(() => {
                            callback()
                        }, 1000)

                    }
                }, lottery.speed)

            }
            onMounted(() => {


            })

            return {
                ...refData,
                handleClick,
                lottery
            }
        },


    }
</script>

<style lang="scss" scoped>
    .squared_content {
        width: 250px;
        height: 250px;
        display: flex;
        flex-wrap: wrap;
    }
    
    .btn {
        width: calc(calc(100% / 3) - 15px);
        height: calc(calc(100% / 3) - 15px);
        margin: 5px;
        border: 1px solid #000;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .squared_main {
        width: calc(calc(100% / 3) - 15px);
        height: calc(calc(100% / 3) - 15px);
        margin: 5px;
        border: 1px solid #000;
    }
    
    .isActive {
        border: none;
    }
</style>