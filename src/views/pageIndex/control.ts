// declare function wxChooseImage(): void
import {
  Options,
  Vue
} from 'vue-class-component';
import Record from '@/components/Record.vue';
import {
  onBeforeMount,
  reactive,
  toRefs,
  ref
} from 'vue'
import {wxChooseImage,initsharemassage} from '@/util/weixin.js';

import adPicker from '@/components/adPicker/index.vue'
interface DataProps {
  token: string;
  openid: string;
  ruleShow: Boolean;
  text: String;
  sheng:string;
  shi:string;
  qu:string;
  xian:string

}
export default {
  components:{
    Record,
    adPicker
  },
  setup(props: any,ctx:any) {
      const data: DataProps = reactive({
          token: '',
          openid: '',
          ruleShow: false,
          text: '源慧信息',
          sheng:'',
          shi:'',
          qu:'',
          xian:''
      })
      let toggleRecord=()=>{
       
        data.ruleShow=!data.ruleShow
        
      }
      const wxChooseImages=()=>{
        wxChooseImage()
      }
      const onconfirm=(val:any)=>{
           switch(val.LevelNum){
             case 1:
               data.sheng=val.Name
               data.shi=''
               data.qu=''
               data.xian=''
               break;
              case 2:
                data.shi=val.Name
                data.qu=''
                data.xian=''
                break;
              case 3:
                  data.qu=val.Name
                  data.xian=''
                  break;
              case 4:
                  data.xian=val.Name
                  break;
           }
      }
      const refData = toRefs(data);
      onBeforeMount(() => {

        // initsharemassage({
        //   title:'首页分享',
        //   link:'https://qcjbdemo.ugetme.cn/#/?url=home',
        //   imgUrl:'https://www.baidu.com/img/flexible/logo/pc/result.png'
        // })
      })
     
      return {
          ...refData,
          toggleRecord,
          wxChooseImages,
          onconfirm
     
      };
  }

}