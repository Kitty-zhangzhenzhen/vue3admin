<template>
    <div class="ad_picker">
      <div class="ad_btns">
          <input type="text" ref="_pro" v-model="sheng.Name" readonly @click="getadArray(1,0)" class="address_input" />
          <input type="text" ref="_city" v-model="shi.Name" readonly @click="getadArray(2,sheng.ID)" class="address_input" />
          <input type="text" ref="_coun" v-model="qu.Name" readonly @click="getadArray(3,shi.ID)" class="address_input" />
          <input type="text" ref="_zhen" v-model="xian.Name" readonly @click="getadArray(4,qu.ID)" class="address_input" />
     </div>
    </div>
    <van-popup class="popup" v-model:show="showPicker" round position="bottom" duration="0.1">
           <van-picker
           :loading="loading"
           :columns="columns"
           @cancel="showPicker = false"
           @confirm="onConfirm"
         />
      
     </van-popup>
    </template>
<script lang="ts">
    import {
        $toast
    } from '@/util/util'
    import fetchJsonp from "fetch-jsonp";
    import {
        Options,
        Vue
    } from 'vue-class-component';
    import {
        onMounted,
        toRefs,
        reactive
    } from 'vue'
    interface DataProp {
        columns: string[];
        showPicker: boolean;
        loading: Boolean;
        sheng: any;
        shi: any;
        qu: any;
        xian: any;
        level: Number
    }
    export default {
        emits: ["onconfirm"],
        setup(props: any, ctx: any) {
            const data: DataProp = reactive({
                columns: [],
                showPicker: false,
                loading: true,
                sheng: {
                    Name: '省'
                },
                shi: {
                    Name: '市'
                },
                qu: {
                    Name: '区'
                },
                xian: {
                    Name: '县'
                },
                level: 0
            })

            const getadArray = async(level: Number, parentid: any) => {
                if (!parentid && parentid != 0) return;
                data.level = level
                data.loading = true
                await _request(level, parentid, (datas: any) => {
                    data.columns = [];
                    if (datas.length == 0) {
                        $toast(`暂无下级`);
                        return
                    }
                    datas.forEach((val: any) => {
                        val.text = val.Name

                    });
                    data.columns = datas
                    data.loading = false
                    data.showPicker = true
                        // console.log(data)
                });
            }
            const onConfirm = (value: any, index: any) => {
                data.showPicker = false;
                ctx.emit('onconfirm', value)
                    // $toast(`当前值: ${value}, 当前索引: ${index}`);
                switch (value.LevelNum) {
                    case 1:
                        data.sheng = value;
                        break;
                    case 2:
                        data.shi = value;
                        break;
                    case 3:
                        data.qu = value;
                        break;
                    case 4:
                        data.xian = value;
                        break;


                }

            };

            const onCancel = () => {
                // $toast(`取消`);
            }
            const createParam = (data: any) => {
                let url = '';
                for (let key in data) {
                    let item = data[key] !== undefined ? data[key] : '';
                    url += `&${key}=${encodeURIComponent(item)}`
                }
                return url ? url : '';
            }
            const _request = async(level: any, parentid: any, callback: Function) => {
                let data = {
                    level: level,
                    parent: parentid
                }
                let url = `https://jscommonapi.escase.cn/Controller/ApiController.ashx?action=getaddress${createParam(data)}`
                try {
                    let _response = await fetchJsonp(url)
                    _response.json().then((json) => {
                        if (json.Success) {
                            callback(json.ObjectValue);
                        } else {

                        }
                    })
                } catch (err) {
                    console.log(err)
                }
            }
            const refData = toRefs(data);
            onMounted(() => {
                // getadArray(1, 0)
            })
            return {
                ...refData,
                getadArray,
                onCancel,
                onConfirm,
            }
        }
    }
</script>
<style>
    .van-toast {
        background-color: rgba(0, 0, 0, .7);
    }
</style>
<style lang="scss" scoped>
    .ad_picker {
        width: 100vw;
        height: 50px;
    }
    
    .picker_content {
        /* background-color: #fff; */
    }
    
    .picker_content {
        width: 7.5rem;
        height: 5rem;
        position: fixed;
        left: 0;
        bottom: 0;
    }
    
    .ad_btns {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }
    
    .address_input {
        width: 100px;
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        padding: 20px 20px;
        font-size: 24px;
        border-radius: 8px;
        margin: 10px auto;
    }
</style>