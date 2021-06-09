<template>
  <div class="container">
  <van-loading type="spinner" size="88px" vertical>loading...</van-loading>
  </div>
</template>
<script lang="ts">
    // import Loading from 'vant/lib/loading';

    import {
        useStore
    } from 'vuex'
    import {
        key
    } from '@/store/index'
    import {
        Options,
        Vue
    } from 'vue-class-component';
    import {
        onMounted,
        onBeforeMount,
        getCurrentInstance,
        ComponentInternalInstance,
        inject,
        reactive
    } from 'vue'
    import {
        getOssKey
    } from '@/api/api'
    import {
        getParamsBydecodeURI,
        $toast
    } from '@/util/util'
    interface DataProps {
        token: string;
        openid: string;
        code: string;
        path: string;
    }
    export default {

        setup(props: any) {
            const store = useStore(key)
            console.log('index', useStore)
            const data: DataProps = reactive({
                token: '',
                openid: '',
                code: getParamsBydecodeURI('AuthorizationCode') || '',
                path: getParamsBydecodeURI('url') || ''
            })
            const {
                proxy
            } = getCurrentInstance() as ComponentInternalInstance;
            // proxy ? .$myProperty;

            const $post: any = inject('$post')

            const getoss = (async() => {
                let res = await $post(getOssKey, {});
                store.dispatch('setToken', localStorage.getItem('token'))
                if (data.path == 'home') {
                    (proxy as any).$router.push({
                        path: '/home'
                    });
                    return
                }
                (proxy as any).$router.push({
                    path: '/PageIndex'
                });
            })

            onMounted(async() => {
                //   $toast('这是一个提示');
                getoss()
            })
            return {
                getoss
            };
        }

    }
</script>
<style lang="scss" scoped>
    .container {
        width: 7.5rem;
        height: 100vh;
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        .container_inner {
            font-size: 24px;
        }
    }
</style>