<template>
  <div class="about">
    <h1 @click="to400">This is an about page</h1>

  </div>
</template>
<script lang="ts">
    import {
        Options,
        Vue
    } from 'vue-class-component';
    import {
        onBeforeMount,
        getCurrentInstance,
        ComponentInternalInstance,
        inject,
        reactive
    } from 'vue'

    export default {

        setup(props: any, context: any) {


            const to400 = (() => {
                window.location.replace('https://www.baidu.com')
            })


            return {
                to400
            };
        }

    }
</script>