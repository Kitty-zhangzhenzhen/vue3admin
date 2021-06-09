// declare function wxChooseImage(): void

  import {
    onBeforeMount,
    onMounted,
    reactive,
    toRefs,
    ref
  } from 'vue'
  import {wxChooseImage,initsharemassage} from '@/util/weixin.js';
  interface DataProps {
    
  }
  export default {
    name:'upImg',
    components:{
     
    },
    setup(props: any,ctx:any) {
    
        const data: DataProps = reactive({
           
        })
        const refData = toRefs(data);
        const wxChooseImages=()=>{
            wxChooseImage()
          }
        onBeforeMount(() => {
        })
        onMounted(()=>{
           
           
           
         
        })
        return {
            wxChooseImages,
            ...refData
        };
    }
  
  }