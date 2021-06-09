<template>
    <div class="module_rotary">
        <img src="https://cdn.esurl.cn/public/images/rotate_plante.png" class="rotateTable" alt :style="rotate" />
        <input type="button" class="drawBtn" @click="pointerBtn" />
  
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
        keyframes: String,
            flag: Boolean,
            rotate: String,
            time: Number
    }

    export default {
        props: {
            rotateData: {
                default: 0
            }
        },
        setup(props: any, ctx: any) {
            const data: DataProps = reactive({
                keyframes: "",
                flag: true,
                rotate: "",
                time: 4,
            })
            const refData = toRefs(data);
            const pointerBtn = () => {
                ctx.emit('pointerBtn')
            }

            const rotating = (deg: any, time: any) => {
                console.log(deg, time)
                let style = document.createElement('style');
                style.type = 'text/css';

                let angle = deg + 3600;
                style.innerHTML = "@keyframes rotating{from{transform:rotate(0)} to{transform:rotate(" + angle + "deg)}}";
                document.getElementsByTagName('head')[0].appendChild(style);
                data.rotate = `animation:rotating ${time}s;animation-fill-mode:forwards `;
                console.log(data)

            }

            onMounted(() => {


            })

            return {
                ...refData,
                pointerBtn,
                rotating
            }
        },


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .module_rotary {
        position: relative;
    }
    
    .tableBox {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100vw;
    }
    
    .container_inner {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100vw;
    }
    
    .rotateTable {
        width: 70%;
    }
    
    .drawBtn {
        width: 2rem;
        height: 2.3rem;
        position: absolute;
        left: 2.8rem;
        top: 1.3rem;
        background: url(https://cdn.esurl.cn/public/images/rotate_click.png) no-repeat;
        background-size: 100% 100%;
    }
</style>