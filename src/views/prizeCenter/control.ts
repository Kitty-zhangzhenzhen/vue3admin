// declare function wxChooseImage(): void
import {
    Options,
    Vue
  } from 'vue-class-component';
  import rotaryTable from '@/components/rotaryTable/index.vue';
  import ninePalaceDraw from '@/components/ninePalaceDraw/index.vue';
  import slotMachine from '@/components/slotMachine/index.vue'
  import {
    onBeforeMount,
    onMounted,
    reactive,
    toRefs,
    ref
  } from 'vue'
  import { useRoute } from "vue-router";
  
  interface DataProps {
    rotateTable:Object,
    btnFlag:Boolean,
    prizeType:number,
    imgList:string[]
  }
  export default {
    components:{
      rotaryTable,
      ninePalaceDraw,
      slotMachine
    },
    setup(props: any,ctx:any) {
      const router = useRoute();
      const ninePalace=ref();
      const Rotary=ref();
        const data: DataProps = reactive({
            rotateTable:{
                rotate:0,
                time:5,
                flag:false
            },
            imgList: ['https://cdn.esurl.cn/public/images/1.png', 'https://cdn.esurl.cn/public/images/2.png', 'https://cdn.esurl.cn/public/images/3.png'],
            prizeType:1,//1转盘抽奖
            btnFlag:false
        })
        
        const pointerBtn=()=> {
            // 接口调成功之后传入deg(旋转度数)，time（旋转时间）
            if(data.btnFlag) return false;
            let obj={
              rotate:150,
              flag:true
            }
            data.btnFlag=true;
            data.rotateTable=obj;
            Rotary.value.rotating(150,5);
          }
        const setlottery=()=>{
          console.log(ninePalace)
          ninePalace.value.lottery(2,()=>{alert('中奖了吧')});
        }
        const refData = toRefs(data);
        onBeforeMount(() => {
        })
        onMounted(()=>{

          data.prizeType=Number(router.query.type);
          console.log(data)
        })
        return {
            ...refData,
            pointerBtn,
            Rotary,
            ninePalace,
            setlottery
        };
    }
  
  }